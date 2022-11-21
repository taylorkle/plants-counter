import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const Homepage = props => {
  const [authentication, setAuthentication] = useState(false)

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/v1/users")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      if (responseBody.user) {
        setAuthentication(true)
      }
    } catch(error) {
      console.error(`Error in Fetch ${error.message}`)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  let button = null
  if (authentication) {
    button = <button type="button"> <Link to='/plants'>Start Counting</Link></button>
  } else {
    button = <button><a href="/users/sign_in">Sign in to start counting</a></button>
  }

  return (
    <div className="produce-background grid-container">
      <div className="grid-x">
        <div className="about callout small-10 medium-8 large-6">
          <h1>Count Your Plants!</h1>
          <p>Did you know that plant diversity leads to gut microbiome diversity which in turn leads to better overall well being? ........ </p>
          {button}
        </div>
      </div>
    </div>
  )
}

export default Homepage