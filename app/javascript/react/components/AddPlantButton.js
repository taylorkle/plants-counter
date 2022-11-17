import React from 'react'

const AddPlantButton = props => {

  const postPlant = async () => {
    try {
      const response = await fetch("/plants", {
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
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      throw new Error(errorMessage)
    }
    const responseBody = await response.json()
    props.setSearchResult({
      id: null,
      name: "",
      image: ""
    })
  } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    postPlant()
  }

  return(
    <form onClick={handleSubmit}>
      <input type="submit" value="+ Add Plant"/>
    </form>
  )
}

export default AddPlantButton