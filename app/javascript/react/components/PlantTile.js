import React, { useEffect, useState } from 'react'

const PlantTile = props => {
  const [hover, setHover] = useState(false)

  let remove_button = null
  let opacity = null
  if (hover) {
    remove_button = <button className="remove" type="button">Remove X</button>
    opacity = "add-opacity"
  }

  return(
    <div className={`cell small-4 medium-3 large-3 plant-tile`}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      <div className={opacity}>
        <p>{props.name}</p>
        <img className="plant-display" src={`https://spoonacular.com/cdn/ingredients_100x100/${props.image}`} alt={props.name}/>
      </div>
      {remove_button}
    </div>
  )
}

export default PlantTile