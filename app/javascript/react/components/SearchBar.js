import React from 'react'
import { useState } from 'react'

const SearchBar = props => {
  const [searchString, setSearchString] = useState("")

  const handleChange = event => {
    setSearchString(event.currentTarget.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log("search submitted")
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Search</label>
      <input type ="text" name="searchString" value={searchString} onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default SearchBar