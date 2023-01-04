import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar.js'
import SearchResultTile from './SearchResultTile.js'
import ToastContainer from './ToastContainer.js'
import FetchUsers from './services/fetchUsers.js'

const SearchContainer = props => {
  const [searchResult, setSearchResult] = useState({
    id: null,
    name: "",
    image: ""
  })
  const [plantAdded, setPlantAdded] = useState(false)
  const [error, setError] = useState("")
  const [userId, setUserId] = useState(null)

  const fetchUser = async () => {
    const userData = await FetchUsers.findUser()
    setUserId(userData)
  }

  useEffect(() => {
    fetchUser()
  }, [])

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
    searchResultDisplay =
    <ToastContainer
      userId={userId}
    />
  }

  return (
    <div className="search-page">
      <h1 className="center-text">Which plant based foods have you eaten this week?</h1>
      <p>Whole grains, fruits, vegetables, legumes, nuts, and seeds count towards weekly plant intake. Additionally, herbs and spices count as 1/4 of a plant.</p>
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