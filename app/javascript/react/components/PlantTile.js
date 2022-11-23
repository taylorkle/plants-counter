import React from 'react'

const PlantTile = props => {
  return(
    <div className="callout">
      {props.name}
      <img className="plant-display" src={`https://spoonacular.com/cdn/ingredients_100x100/${props.image}`} alt={props.name}/>
    </div>
  )
}

export default PlantTile