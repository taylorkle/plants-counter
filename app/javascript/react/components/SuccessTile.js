import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SuccessTile = props => {
  const [user, setUser] = useState({
    id: null,
    email: ""
  })

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/v1/users")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setUser(responseBody.user)
    } catch(error) {
      console.error(`Error in Fetch ${error.message}`)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return(
    <div>
      Added successfully!
      <button type="button"><Link to ={`/users/${user.id}`}>View On Profile</Link></button>
    </div>
  )
}

export default SuccessTile