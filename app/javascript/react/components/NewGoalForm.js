import React, { useState } from 'react'
import FetchUsers from "./services/fetchUsers"

const NewGoalForm = props => {
  const [newGoal, setNewGoal] = useState("")
  const [error, setError] = useState("")

  const postGoal = async () => {
    const response = await FetchUsers.setGoal(newGoal, props.userData.id)
    if (response.error) {
      setError(response.error)
    } else {
      props.setUserData({
        ...props.userData,
        plantGoal: response.goal,
      })
    }
  }

  const validForm = () => {
    if (newGoal.trim() !== "" && newGoal.match(/^([0-9]?)+$/) && parseInt(newGoal) !== 0) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validForm()) {
      postGoal()
      setNewGoal("")
      setError("")
      props.setShowForm(false)
    } else {
      setError("Must be a whole number greater than 0")
    }
  }

  const handleChange = (event) => {
    setNewGoal(event.currentTarget.value)
  }

  return(
    <div>
      {error}
      <form onSubmit={handleSubmit}>
        <input type="text" name="goal" onChange={handleChange} value={newGoal} placeholder="Enter whole number greater than 0"/>
        <button className="button" type="submit">Set Goal</button>
      </form>
    </div>
  )
}

export default NewGoalForm