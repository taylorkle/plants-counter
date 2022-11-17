import React from 'react'
import { Link } from 'react-router-dom'

const SuccessTile = props => {
  return(
    <div>
      Added successfully!
      <button type="button"><Link to ={`/users/${props.user}`}>View On Profile</Link></button>
    </div>
  )
}

export default SuccessTile