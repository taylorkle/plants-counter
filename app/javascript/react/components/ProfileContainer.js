import React, { useState, useEffect } from "react"

const ProfileContainer = props => {
  const [user, setUser] = useState({})

  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${props.match.params.id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      let userData = responseBody.user
      setUser(userData)
    }
    catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return(
    <div>
      <h1>{user.first_name}'s Plant Intake </h1>
    </div>
  )
}

export default ProfileContainer