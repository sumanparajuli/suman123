import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrementNumber, incrementNumber } from './actions'

const App = () => {
  
  const myState = useSelector((state)=> state.changeTheNumber)
  const dispatch = useDispatch()

  return (
    <>
      <div className="container">
        <h1>increment/decrement</h1>

        <div className="plus" onClick={()=> dispatch(incrementNumber())}>+</div>
        <p>{myState}</p>
        <div className="minus" onClick={()=>dispatch(decrementNumber())}>-</div>

      </div>

    </>
  )
}

export default App