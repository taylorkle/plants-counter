import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import FetchUsers from './services/fetchUsers.js'

const PlantAddedTile = props => {
  const [userId, setUserId] = useState({
    id: null
  })

  const fetchUser = async () => {
    const userData = await FetchUsers.findUser()
    setUserId(userData)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return(
    <div className="search-page search">
      <p>Added Successfully!</p>
      <Link to={`/users/${userId.id}`}><button className="button add-plant-button" type="button">View On Profile</button></Link>
    </div>
  )
}

export default PlantAddedTile