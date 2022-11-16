import React from 'react'

const SearchResultTile = props => {

  let image = null
  if (props.searchResult.image) {
    image = <img src={`https://spoonacular.com/cdn/ingredients_250x250/${props.searchResult.image}`}></img>
  }

  return(
    <div>
      <h1>{props.searchResult.name}</h1>
      {image}
    </div>
  )
}

export default SearchResultTile