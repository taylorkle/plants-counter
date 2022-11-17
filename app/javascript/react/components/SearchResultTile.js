import React from 'react'
import { useState } from 'react'
import AddPlantButton from './AddPlantButton.js'

const SearchResultTile = props => {

  let result = false
  if (props.searchResult.image) {
    result = true
    if (result) {
      return(
      <div>
        <img src={`https://spoonacular.com/cdn/ingredients_250x250/${props.searchResult.image}`} alt={props.searchResult.name}/>
        {/* alt attribute is not rendering */}
        < AddPlantButton
          searchResult = {props.searchResult}
          setSearchResult = {props.setSearchResult}
        />
      </div>
      )
  }
}

  return(
    <div>
      <h1>{props.searchResult.name}</h1>
        {/* h1 is not rendering when I edit my result variable to include a button */}
      {result}
    </div>
  )
}

export default SearchResultTile