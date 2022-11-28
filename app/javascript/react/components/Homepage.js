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
    button = <button className="button" type="button"> <Link to='/plants'>START COUNTING</Link></button>
  } else {
    button = <button className="button"><a href="/users/sign_in">SIGN IN TO START COUNTING</a></button>
  }

  return (
    <div className="produce-background grid-container">
      <div className="grid-x">
        <div className="about callout small-10 medium-8 large-6">
          <p>Count Your Plants!</p>
          <p>Based on a landmark study, consuming 30 types of plant foods weekly leads to greater diversity of gut microbes which in turn leads to improved overall health.</p>
          {button}
        </div>
      </div>
    </div>
  )
}

export default Homepage

