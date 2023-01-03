import React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import FetchUsers from "./services/fetchUsers.js"

const Homepage = props => {
  const [authenticate, setAuthenticate] = useState(false)

  const fetchUser = async () => {
    const user = await FetchUsers.findUser()
    if (user) {
      setAuthenticate(true)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  let button = null
  if (authenticate) {
    button = <button className="button" type="button"> <Link to='/plants'>START COUNTING</Link></button>
  } else {
    button = <button className="button"><a href="/users/sign_in">SIGN IN TO START COUNTING</a></button>
  }

  return (
    <div className="produce-background grid-container">
      <div className="grid-x">
        <div className="about callout small-10 medium-8 large-6">
          <h2>Count Your Plants!</h2>
          <p>Based on a landmark study, consuming 30 types of plant foods weekly leads to greater diversity of gut microbes which in turn leads to improved overall health.*</p>
          {button}
        </div>
      </div>
    </div>
  )
}

export default Homepage

