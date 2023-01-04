import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ToastContainer = props => {

  let navigate = useNavigate()

  // const makeToast = () => {
  new Toast({ //rendered following footer in erb
    message: "Plant Added Successfully!",
    customButtons:
      [
        {text: "View on Profile", onClick: () => {
          navigate(`/users/${props.userId}`)
          const params = useParams();
          }
        }
      ]
  })
// }


  return(
    <div>
    {/* // <div className="ToastContainer">
    //   {makeToast()} */}
    </div>
  )
}

export default ToastContainer