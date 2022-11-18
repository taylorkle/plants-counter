import React, { useEffect } from 'react'
import SearchBar from './SearchBar.js'
import SearchResultTile from './SearchResultTile.js'
import SuccessTile from './SuccessTile.js'
import { useState } from 'react'

const PlantSearchContainer = props => {
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
      searchResult = {searchResult}
      setSearchResult = {setSearchResult}
      setPlantAdded = {setPlantAdded}
      setError = {setError}
    />
  } else if (plantAdded === true) {
    searchResultDisplay = <SuccessTile />
  }

  return (
    <div>
      <h1 className = "green-heading center-text">Which plant based foods have you eaten this week?</h1>
      <SearchBar
        setSearchResult={setSearchResult}
      />
      {error}
      {searchResultDisplay}
    </div>
  )
}

export default PlantSearchContainer