import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import GetCurrentWeek from "./services/getCurrentWeek.js"
import PlantIndex from "./PlantIndex.js"
import NewGoalForm from "./NewGoalForm.js"
import ProgressBar from "./ProgressBar.js"
import getCurrentWeek from "./services/getCurrentWeek.js"

const ProfileContainer = props => {
  const [userData, setUserData] = useState({
    id: null,
    firstName: "",
    plantGoal: null,
    plantNumber: null,
  })
  const [showForm, setShowForm] = useState(false)

  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${props.match.params.id}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      let user = responseBody.user
      setUserData({
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

  let progressDisplay = null
  let plantDisplay = null
  let addButton = null
  if(userData.plantNumber === 0) {
    progressDisplay = <span>Start adding plants to work towards your goal! </span>
    addButton = <Link to="/plants"><button className="button" type="button" >Add Plants</button></Link>
  } else {
    progressDisplay =
    <div>
      <ProgressBar
        plantGoal={userData.plantGoal}
        plantNumber={userData.plantNumber}
      />
      <span>Great work, {userData.firstName}! You have {userData.plantNumber} plants so far. </span>
    </div>
    plantDisplay = <PlantIndex/>
  }

  let formDisplay = <button className="button set-goal" onClick={handleClick} type="submit">Set New Goal</button>
  if (showForm) {
    formDisplay= <NewGoalForm
      setUserData={setUserData}
      userData={userData}
      setShowForm={setShowForm}
    />
  }

  const handleClick = (event) => {
    setShowForm(true)
  }

  const currentWeek = getCurrentWeek()

  return(
    <div>
      <h1>{currentWeek}</h1>
      <div className="profile-page grid-x grid-margin-x">
        <div className="goal-section cell medium-6 large-6">
          <h2 className="summary">{userData.firstName}'s Plant Summary</h2>
          {progressDisplay}
          <div className="summary-text">
            <span>Your current goal is to eat {userData.plantGoal} types of plants per week.</span>
          </div>
          <div>
            {formDisplay}
            {addButton}
          </div>
        </div>
        <div className="cell medium-6 large-6">
          {plantDisplay}
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer