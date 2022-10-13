import React from 'react'

const ListItem = (props) => {

  
  return (
    <div className=''>
     
     <li className='mx-2'>{props.element}</li> 
     <button className='bg-red-500 text-white px-4 py-2 cursor-pointer rounded-md' onClick={() => { props.handleDelete(props.id) }}>Delete</button>
     
    </div>
  )
}

export default ListItem