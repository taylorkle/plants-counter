import React, { useState } from 'react'

const NewGoalForm = props => {
  const [newGoal, setNewGoal] = useState("")

  const postGoal = async () => {
    try {
      const response = await fetch(`/api/v1/users/${props.userId}/edit`, {
        method: "POST",
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

  const handleSubmit = (event) => {
    event.preventDefault()
    postGoal()
  }

  const handleChange = (event) => {
    setNewGoal(event.currentTarget.value)
  }

  return(
    <div>
      <form onClick={handleSubmit}>
        <input type="text" name="goal" value={newGoal} onChange={handleChange}/>
        <input type="submit" value="Set Goal"/>
      </form>
    </div>
  )
}

export default NewGoalForm