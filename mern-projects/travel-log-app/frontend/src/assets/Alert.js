import React from 'react'

const Alert = (props) => {
    const {type, message} = props
   
  return (
    <div>
        <p>{type} !, {message}</p>
        {/* <p>Success man</p> */}
    </div>
  )
}

export default Alert