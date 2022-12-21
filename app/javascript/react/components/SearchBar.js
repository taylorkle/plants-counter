import React from 'react'
import { useState } from 'react'

const SearchBar = ({setError, setSearchResult, setPlantAdded}) => {
  const [searchString, setSearchString] = useState("")

  const fetchResult = async () => {
    try {
      const response = await fetch("/api/v1/spoonacular/search", {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify({
          searchString: searchString
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
      const responseBody = await response.json()
      if (!response.ok) {
        setError(responseBody.error)
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      setSearchResult(responseBody)
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
    setPlantAdded(false)
    event.preventDefault()
    if (validSearch()) {
      setError("")
      fetchResult()
      setSearchString("")
    } else {
      setError("Not a valid search")
    }
  }

  const handleChange = event => {
    setSearchString(event.currentTarget.value)
  }

  return(
    <form onSubmit={handleSubmit} className="search">
      <input className="inline search-bar" type ="text" name="searchString" value={searchString} onChange={handleChange} placeholder="Search food item with exact spelling, i.e. 'apple'"/>
      <button className="inline button" type="submit">Search</button>
    </form>
  )
}

export default SearchBar