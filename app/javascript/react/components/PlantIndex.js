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
  }, [props.plantRemoved])

  const plantTiles = plantData.map(plant => {
    return(
      <PlantTile
        key={plant.id}
        id={plant.id}
        name={plant.name}
        image={plant.image}
        setPlantRemoved={props.setPlantRemoved}
      />
    )
  })

  return(
    <div>
      <h2 className="summary-heading">Plants Consumed this Week</h2>
        <div className="grid-x">
          {plantTiles}
          <Link className="cell small-4 medium-3 large-3 plant-tile" to="/plants">
            <p>New Plant</p>
            <p className="add">+</p>
          </Link>
        </div>
    </div>
  )
}

export default PlantIndex