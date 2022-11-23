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
    displayPlants = <h2>Your current plants</h2>
  }

  return(
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell small-10, medium-4, large-4">
          {displayPlants}
          {plantTiles}
        </div>
      </div>
    </div>
  )
}

export default PlantIndex