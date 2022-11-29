import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PlantTile from './PlantTile.js'

const PlantIndex = props => {
  const [plantData, setPlantData] = useState([])

  const fetchPlants = async () => {
    try {
      const response = await fetch(`/api/v1/plants`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      let plants = responseBody.plants
      setPlantData(plants)
    }
    catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchPlants()
  }, [])

  const plantTiles = plantData.map(plant => {
    return(
      <PlantTile
        key={plant.id}
        name={plant.name}
        image={plant.image}
      />
    )
  })

  let displayPlants = null
  let addButton = null
  if (plantData.length !== 0) {
    displayPlants = <span className = "summary-text">Plants Consumed this Week</span>
    addButton = <Link to="/plants"><button className="button" type="button">Add More</button></Link>
  }

  return(
    <div>
      {displayPlants}
      {addButton}
        <div className="grid-x">
          {plantTiles}
        </div>
    </div>
  )
}

export default PlantIndex