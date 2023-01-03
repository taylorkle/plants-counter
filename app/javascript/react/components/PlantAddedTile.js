import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PlantAddedTile = props => {
  const [userId, setUserId] = useState({
    id: null
  })

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/v1/users")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const responseBody = await response.json()
      setUserId(responseBody.user.id)
    } catch(error) {
      console.error(`Error in Fetch ${error.message}`)
    }
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