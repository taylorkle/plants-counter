import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
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

  const handleClick = (event) => {
    setShowForm(true)
  }

  const currentDay = new Date
  const firstDay = new Date(currentDay.setDate(currentDay.getDate() - currentDay.getDay()))
  const lastDay = new Date(currentDay.setDate(currentDay.getDate() - currentDay.getDay() + 6))
  const currentWeek = `${firstDay.toDateString()} - ${lastDay.toDateString()}`

  let message = null
  let button = null
  if(userData.plantNumber === 0) {
    message = <h2>Start adding plants to work towards your goal!</h2>
    button = <Link to="/plants"><button className="button" type="button" >Add Plants</button></Link>
  } else {
    message = <h2>Great work, {userData.firstName}! You have {userData.plantNumber} plants so far.</h2>
  }

  let goalDisplay = null
  if (goal) {
    goalDisplay = goal
  } else {
    goalDisplay = userData.plantGoal
  }

  let formDisplay = <button className="button" onClick={handleClick} type="submit">Set New Goal</button>
  if (showForm) {
    formDisplay= <NewGoalForm
      setGoal={setGoal}
      userId={userData.id}
      setShowForm={setShowForm}
    />
  }

  return(
    <div>
      <h1>{currentWeek}</h1>
      <div className="profile-page grid-x grid-margin-x">
        <div className="cell medium-6 large-6 goal-section">
          {message}
          {button}
          <h2>Your current goal is to eat {goalDisplay} types of plants per week.</h2>
          {formDisplay}
        </div>
        <div className="cell medium-6 large-6">
          <PlantIndex/>
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer