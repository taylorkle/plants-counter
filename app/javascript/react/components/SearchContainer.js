import React from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar.js'
import SearchResultTile from './SearchResultTile.js'
import SuccessTile from './SuccessTile.js'

const SearchContainer = props => {
  const [searchResult, setSearchResult] = useState({
    id: null,
    name: "",
    image: ""
  })
  const [plantAdded, setPlantAdded] = useState(false)
  const [error, setError] = useState([])

  let searchResultDisplay = null
  if (searchResult.id) {
    searchResultDisplay =
    <SearchResultTile
      searchResult={searchResult}
      setSearchResult={setSearchResult}
      setPlantAdded={setPlantAdded}
      setError={setError}
    />
  } else if (plantAdded === true) {
    searchResultDisplay = <SuccessTile/>
  }

  return (
    <div className="search-page">
      <h1 className="center-text">Which plant based foods have you eaten this week?</h1>
      <SearchBar
        setSearchResult={setSearchResult}
        setError={setError}
        setPlantAdded={setPlantAdded}
      />
      {error}
      {searchResultDisplay}
    </div>
  )
}

export default SearchContainer