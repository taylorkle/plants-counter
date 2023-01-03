import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FetchUsers from './services/fetchUsers.js'

const PlantAddedTile = props => {
  const [userId, setUserId] = useState({
    id: null
  })

  const fetchUser = async () => {
    const userData = await FetchUsers.findUser()
    setUserId(userData)
  }

  let navigate = useNavigate()
  const onClickHandler = (event) => {
    navigate(`/users/${userId}`)
  }
  debugger
  let navigate = useNavigate()
  const onClickHandler = (event) => {
    debugger
    navigate(`/users/${userId}`)
  }

  useEffect(() => {
    fetchUser()  //await, then
    new Toast({message: "Plant Added Successfully!", customButtons: [{text: "View on Profile", onClick: onClickHandler}]})
  }, [])

  return(
    // <div className="search-page search">
    //   <p>Added Successfully!</p>
    //   <Link to={`/users/${userId.id}`}><button className="button add-plant-button" type="button">View On Profile</button></Link>
    // </div>
    <div>

    </div>
  )
}

export default PlantAddedTile