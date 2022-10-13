import React, {useReducer} from 'react'

const reducerFunc = (state, action)=>{
    switch (action.type) {
        case 'DARK':
            state = 'black'
            return state

        case 'LIGHT':
            state = 'white'
            return state
        default:
            state = 'white'
            return state
    }

}

const ReducerHook = () => {
    const [state, dispatch] = useReducer(reducerFunc, 'white')
  return (
    <div>
        <h1>State Changes: {state}</h1>
        <button onClick={()=> {
            dispatch({type: state === 'white' ? 'DARK' : 'LIGHT'});
            document.body.style.backgroundColor = state
        }}>Click me for magic</button>
    </div>

  )
}

export default ReducerHook