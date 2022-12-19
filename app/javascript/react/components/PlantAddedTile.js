import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PlantAddedTile = props => {
  const [userId, setUserId] = useState({
    id: null
  })

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/v1/users")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setUserId(responseBody.user.id)
    } catch(error) {
      console.error(`Error in Fetch ${error.message}`)
    }
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