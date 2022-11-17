import React from 'react'
import SearchBar from './SearchBar.js'
import SearchResultTile from './SearchResultTile.js'
import { useState } from 'react'

const PlantSearchContainer = props => {
  const [searchResult, setSearchResult] = useState({
    id: null,
    name: "",
    image: ""
  })

  return (
    <div>
      <h1 className = "green-heading center-text">Which plant based foods have you eaten this week?</h1>
      <SearchBar
        setSearchResult = {setSearchResult}
      />
      <div>
      <SearchResultTile
        searchResult = {searchResult}
        setSearchResult = {setSearchResult}
      />
      </div>
    </div>
  )
}

export default PlantSearchContainer