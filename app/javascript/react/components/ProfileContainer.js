import React, { useState, useEffect } from "react"
import PlantIndex from "./PlantIndex.js"

const ProfileContainer = props => {
  const [userData, setUser] = useState({
    firstName: "",
    plantGoal: null,
    plantNumber: null,
  })

  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${props.match.params.id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      let user = responseBody.user
      setUser({
        firstName: user.first_name,
        plantGoal: user.plant_goal,
        plantNumber: user.plant_number
      })
    }
    catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return(
    <div className="profile-page">
      <h1>{userData.firstName}'s Plant Intake: {userData.plantNumber} plants </h1>
      <PlantIndex/>
    </div>
  )
}

export default ProfileContainer