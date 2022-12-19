import React, { useEffect, useState } from 'react'

const PlantTile = props => {
  const [hover, setHover] = useState(false)

  const handleHover = () => {
    setHover(true)
  }

  const handleLeaveHover = () => {
    setHover(false)
  }

  const deletePlant = async () => {
    try {
      const response = await fetch(`/api/v1/plants/${props.id}`, {
        method: "DELETE",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
      const responseBody = await response.json()
      props.setPlantRemoved(responseBody.plant)
      if (!response.ok) {
        const errorMessage =`${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  let remove_button = null
  let opacity = null
  if (hover) {
    remove_button = <div onClick={deletePlant} className="right-align"><button className="remove" type="button">X</button></div>
    opacity = "add-opacity"
  }

  return(
    <div className={`cell small-4 medium-3 large-3 plant-tile`} onMouseEnter={handleHover} onMouseLeave={handleLeaveHover}>
      {remove_button}
      <div className={opacity}>
        <p>{props.name}</p>
        <img className="plant-display" src={`https://spoonacular.com/cdn/ingredients_100x100/${props.image}`} alt={props.name}/>
      </div>
    </div>
  )
}

export default PlantTile