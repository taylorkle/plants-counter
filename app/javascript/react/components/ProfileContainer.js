import React, { useState, useEffect } from "react"


const ProfileContainer = props => {
  const [getUser, setUser] = useState("")

  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${props.match.params.id}`)
      if (!response.ok) {
        const errorMessage = `$(response.status) (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      let user = responseBody
      setUser(user)
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
      {props.match.params.id}
    </div>
  )
}

export default ProfileContainer