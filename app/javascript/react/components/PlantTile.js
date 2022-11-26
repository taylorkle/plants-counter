import React from 'react'

const PlantTile = props => {
  return(
    <div className="grid-container">
      <div className="grid-x">
        <div className="callout cell small-6 medium-4 large-3 plant-tile">
            <p className="center-text">{props.name}</p>
            <img className="plant-display" src={`https://spoonacular.com/cdn/ingredients_100x100/${props.image}`} alt={props.name}/>
        </div>
      </div>
    </div>
  )
}

export default PlantTile