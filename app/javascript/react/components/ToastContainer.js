import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ToastContainer = props => {

  let navigate = useNavigate()
  const params = useParams()

  new Toast({
    message: "Plant Added Successfully!",
    customButtons:
      [
        {text: "View on Profile", onClick: () => {
          navigate(`/users/${props.userId}`)
          }
        }
      ]
  })


  return(
    <div>
    </div>
  )
}

export default ToastContainer