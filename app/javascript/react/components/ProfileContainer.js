import React, { useState, useEffect } from "react"
import PlantIndex from "./PlantIndex.js"

const ProfileContainer = props => {
  const [userData, setUser] = useState({
    first_name: "",
    plant_goal: null,
    plant_number: null,
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
        first_name: user.first_name,
        plant_goal: user.plant_goal,
        plant_number: user.plant_number,
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
    <div>
      <h1>{userData.first_name}'s Plant Intake </h1>
      <PlantIndex/>
    </div>
  )
}

export default ProfileContainer