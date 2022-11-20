import React from 'react'

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
      props.setError(responseBody.error)
      const errorMessage = `${response.status} (${response.statusText})`
      throw new Error(errorMessage)
    }
    props.setPlantAdded(true)
  } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    postPlant()
  }

  return(
    <div>
      <h1>{props.searchResult.name}</h1>
      <img src={`https://spoonacular.com/cdn/ingredients_250x250/${props.searchResult.image}`} alt={props.searchResult.name}/>
      <form onClick={handleSubmit}>
        <input type="submit" value="+ Add Plant"/>
      </form>
    </div>
  )
}

export default SearchResultTile