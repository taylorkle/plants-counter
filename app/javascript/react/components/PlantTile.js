import React from 'react'

const PlantTile = props => {
  return(
    <div className="cell small-4 medium-3 large-3 plant-tile">
        <p className="center-text">{props.name}</p>
        <img className="plant-display" src={`https://spoonacular.com/cdn/ingredients_100x100/${props.image}`} alt={props.name}/>
    </div>
  )
}

export default PlantTile