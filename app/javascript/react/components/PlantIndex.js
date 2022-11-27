import React, { useState, useEffect } from 'react'
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
  if (plantData.length !== 0) {
    displayPlants = <h2>Plants Consumed this Week</h2>
  }

  return(
    <div>
      {displayPlants}
        <div className="grid-x">
          {plantTiles}
        </div>
    </div>
  )
}

export default PlantIndex