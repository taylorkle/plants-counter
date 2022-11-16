import React from 'react'

const SearchResultTile = props => {

  const postPlant = async () => {
    try {

    }
    catch(error) {

    }
  }

  const handleClick = event => {
    postPlant()
  }

  let result = false
  if (props.searchResult.image) {
    result = true
    if (result) {
      return(
      <div>
        <img src={`https://spoonacular.com/cdn/ingredients_250x250/${props.searchResult.image}`}></img>
        <button onClick={handleClick}>+Add plant</button>
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