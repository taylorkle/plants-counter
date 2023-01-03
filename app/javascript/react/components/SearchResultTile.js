import React from 'react'

const SearchResultTile = ({setSearchResult, searchResult, setError, setPlantAdded}) => {

  const postPlant = async () => {
    try {
      const response = await fetch("/api/v1/plants", {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify({
          plantData: searchResult
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
      const responseBody = await response.json()
      setSearchResult({
        id: null,
        name: "",
        image: ""
      })
      if (!response.ok) {
        setError(responseBody.error)
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      setPlantAdded(true)
      setError("")
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    postPlant()
  }

  return(
    <div className="search-page">
      <img className="plant-display" src={`https://spoonacular.com/cdn/ingredients_250x250/${searchResult.image}`} alt={searchResult.name}/>
      <form onClick={handleSubmit} className="add-plant-form">
        <button className="button add-plant-button" type="submit">+ Add {searchResult.name}</button>
      </form>
    </div>
  )
}

export default SearchResultTile