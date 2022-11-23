import React from 'react'
import { useState } from 'react'

const SearchBar = props => {
  const [searchString, setSearchString] = useState("")

  const fetchResult = async () => {
    try {
      const response = await fetch("/api/v1/spoonacular/search", {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify({
          search_string: searchString
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
      const responseBody = await response.json()
      if (!response.ok) {
        props.setError(responseBody.error)
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      props.setSearchResult(responseBody)
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const validSearch = () => {
    if (searchString.trim() !== "" && searchString.match(/^([a-zA-Z]?[\s]?)+$/)) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = event => {
    props.setPlantAdded(false)
    event.preventDefault()
    if (validSearch()) {
      props.setError("")
      fetchResult()
    } else {
      props.setError("Not a valid search")
    }
    setSearchString("")
  }

  const handleChange = event => {
    setSearchString(event.currentTarget.value)
  }

  return(
    <form onSubmit={handleSubmit} className="search">
      <label>Search</label>
      <input type ="text" name="searchString" value={searchString} onChange={handleChange}/>
      <input className="submit" type="submit" value="Submit" />
    </form>
  )
}

export default SearchBar