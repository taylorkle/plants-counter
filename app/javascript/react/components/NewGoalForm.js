import React, { useState } from 'react'

const NewGoalForm = props => {
  const [newGoal, setNewGoal] = useState("")
  const [error, setError] = useState("")

  const postGoal = async () => {
    try {
      const response = await fetch(`/api/v1/users/${props.userData.id}`, {
        method: "PATCH",
        credentials: "same-origin",
        body: JSON.stringify({
          goal: newGoal
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
      const responseBody = await response.json()
      if (!response.ok) {
        setError(responseBody.error)
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      props.setUserData({
        ...props.userData,
        plantGoal: responseBody.goal,
      })
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
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
        <button className="button" type="submit">Set New Goal</button>
      </form>
    </div>
  )
}

export default NewGoalForm