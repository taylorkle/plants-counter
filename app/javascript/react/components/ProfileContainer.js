import React, { useState, useEffect } from "react"
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
  const [plantRemoved, setPlantRemoved] = useState(null)

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
  }, [plantRemoved])

  const currentWeek = getCurrentWeek()

  let progressMessage = null
  if(userData.plantNumber !== 0) {
    progressMessage = <span>Great work, {userData.firstName}! You have {userData.plantNumber} plants so far. </span>
  } else {
    progressMessage = <span>Start adding plants to work towards your goal! </span>
  }

  const handleClick = (event) => {
    setShowForm(true)
  }

  let formDisplay = <button className="button" onClick={handleClick} type="submit">Set New Goal</button>
  if (showForm) {
    formDisplay= <NewGoalForm
      setUserData={setUserData}
      userData={userData}
      setShowForm={setShowForm}
    />
  }

  return(
    <div>
      <h1>{currentWeek}</h1>
      <div className="profile-page grid-x grid-margin-x">
        <div className="goal-section cell medium-6 large-6">
          <h2 className="summary-heading">{userData.firstName}'s Plant Summary</h2>
          <ProgressBar
            plantGoal={userData.plantGoal}
            plantNumber={userData.plantNumber}
          />
          <div className="summary-text">
            {progressMessage}
            <span>Your current goal is to eat {userData.plantGoal} types of plants per week.</span>
          </div>
          <div>
            {formDisplay}
          </div>
        </div>
        <div className="cell medium-6 large-6">
          <PlantIndex
            setPlantRemoved={setPlantRemoved}
            plantRemoved={plantRemoved}
          />
        </div>
      </div>
    </div>
  )
}

export default ProfileContainer