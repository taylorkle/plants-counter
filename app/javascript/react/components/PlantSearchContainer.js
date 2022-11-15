import React from 'react'
import SearchBar from './SearchBar.js'

const PlantSearchContainer = props => {
  return (
    <div>
      <h1 className = "green-heading center-text">Which plant based foods have you eaten this week?</h1>
      <SearchBar />
    </div>
  )

}

export default PlantSearchContainer