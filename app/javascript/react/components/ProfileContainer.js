import React, { useState, useEffect } from "react"
import PlantIndex from "./PlantIndex.js"
import NewGoalForm from "./NewGoalForm.js"

const ProfileContainer = props => {
  const [userData, setUser] = useState({
    id: null,
    firstName: "",
    plantGoal: null,
    plantNumber: null,
  })
  const [showForm, setShowForm] = useState(false)
  const [goal, setGoal] = useState(null)

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
        id: user.id,
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

  const currentDay = new Date
  const firstDay = new Date(currentDay.setDate(currentDay.getDate() - currentDay.getDay()))
  const lastDay = new Date(currentDay.setDate(currentDay.getDate() - currentDay.getDay() + 6))
  const currentWeek = `${firstDay.toDateString()} - ${lastDay.toDateString()}`

  const handleClick = (event) => {
    setShowForm(true)
  }

  let formDisplay = <button onClick={handleClick} type="submit">Set New Goal</button>
  if (showForm) {
    formDisplay= <NewGoalForm
      setGoal={setGoal}
      userId={userData.id}
    />
  }

  let goalDisplay = null
  if (goal) {
    goalDisplay = goal
  } else {
    goalDisplay = userData.plantGoal
  }

  return(
    <div className="profile-page">
      <h1>{currentWeek}</h1>
      <h2>{userData.firstName}'s Plant Intake: {userData.plantNumber} plants </h2>
      <h2>{userData.firstName}'s Intake Goal: {goalDisplay}</h2>
      {formDisplay}
      <PlantIndex/>
    </div>
  )
}

export default ProfileContainer