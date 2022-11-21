import React from 'react'
import { Link } from "react-router-dom"

const AboutTile = props => {
  return(
    <div className="grid-container">
      <div className="grid-x">
        <div className="about callout small-10 medium-8 large-6">
          <h1>Count Your Plants!</h1>
          <p>Did you know that plant diversity leads to gut microbiome diversity which in turn leads to better overall well being? ........ </p>
          <button type="button"> <Link to='/plants'>Start Counting</Link></button>
        </div>
      </div>
    </div>
  )
}

export default AboutTile