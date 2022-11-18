
import React from 'react'
import { useState } from 'react'

const SearchBar = props => {
  const [searchString, setSearchString] = useState("")

  let validSearch = false
  if (searchString.strip !== "" && searchString.match(/^[a-zA-Z]+$/)) {
    validSearch = true
  }


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
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      props.setSearchResult(responseBody)
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validSearch) {
      fetchResult()
    } else {
      console.log("error")
    }
    setSearchString("")
  }

  const handleChange = event => {
    setSearchString(event.currentTarget.value)
  }

  return(
    <form onSubmit={handleSubmit} className="search">
      <label>Search</label>
      <input type ="text" name="searchString" value={searchString} onChange={handleChange} />
      <input className="submit" type="submit" value="Submit" />
    </form>
  )
}

export default SearchBar