import React, { useReducer } from 'react'


const initialState = 0;
const reducer = (state, action) => {
    if(action.type === 'INCREMENT'){
        return state + 1
    }
    if(action.type === 'DECREMENT'){
        return state - 1
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>Counter</h1>
                <h2>{state}</h2>
            <div className='d-flex-center flex-col'>
                <button onClick={() => { dispatch({ type: 'INCREMENT' }) }}>increment</button>
                <button onClick={() => { dispatch({ type: 'DECREMENT' }) }}>decrement</button>
            </div>
        </>
    )
}

export default UseReducer