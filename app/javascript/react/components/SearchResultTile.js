import React from 'react'
import { useState } from 'react'


const SearchResultTile = props => {

  const postPlant = async () => {
    try {
      const response = await fetch("/api/v1/plants", {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify({
          plantData: props.searchResult
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
      }
    })
    const responseBody = await response.json()
    props.setSearchResult({
      id: null,
      name: "",
      image: ""
    })
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      throw new Error(errorMessage)
    }
    props.setPlantAdded(true)
  } catch(error) {
      // debugger     getting message that responseBody is not defined
      console.error(`Error in Fetch: ${error.message}`)
      props.setError(responseBody.error)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    postPlant()
  }

  return(
    <div>
      <h1>{props.searchResult.name}</h1>
        {/* h1 is not rendering when I edit my result variable to include a button */}
      <img src={`https://spoonacular.com/cdn/ingredients_250x250/${props.searchResult.image}`} alt={props.searchResult.name}/>
        {/* alt attribute is not rendering */}
      <form onClick={handleSubmit}>
        <input type="submit" value="+ Add Plant"/>
      </form>
    </div>
  )
}

export default SearchResultTile