import React, { useEffect } from 'react'
import SearchBar from './SearchBar.js'
import SearchResultTile from './SearchResultTile.js'
import SuccessTile from './SuccessTile.js'
import { useState } from 'react'

const PlantSearchContainer = props => {
  const [searchResult, setSearchResult] = useState({
    id: null,
  })
  const [plantAdded, setPlantAdded] = useState(false)
  const [userId, setUserId] = useState(null)
  const [error, setError] = useState([])

  // const fetchUser = async () => {

  // }

  // useEffect(() => {
  //   fetchUser()
  // }, [])

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
    searchResultDisplay =
    <SuccessTile
      user = {userId}
    />
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