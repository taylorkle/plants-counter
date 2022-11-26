import React, { useState } from 'react'

const NewGoalForm = props => {
  const [newGoal, setNewGoal] = useState("")

  const postGoal = async () => {
    try {
      const response = await fetch(`/api/v1/users/${props.userId}`, {
        method: "PUT",
        credentials: "same-origin",
        body: JSON.stringify({
          goal: newGoal
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      })
      if (!response.ok) {
        // props.setError(responseBody.error)
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      props.setGoal(responseBody.goal)
    } catch(error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  const validForm = () => {
    if (newGoal.trim() !== "" && newGoal.match(/^([0-9]?)+$/) && newGoal !== "0") {   //maybe convert to int
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
    } else {
      console.log("error")
    }
  }

  const handleChange = (event) => {
    setNewGoal(event.currentTarget.value)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="goal" onChange={handleChange} value={newGoal}/>
        <input type="submit" value="Set Goal"/>
      </form>
    </div>
  )
}

export default NewGoalForm