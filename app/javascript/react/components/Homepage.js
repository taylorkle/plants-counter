import React from 'react'
import { Link } from "react-router-dom"
import AboutTile from './AboutTile.js'

const Homepage = props => {
  return (
    <div className="produce-background">
     <AboutTile />
     <button type="button"> <Link to='/plants'>Start Counting</Link></button>
    </div>
  )
}

export default Homepage