import React, {useState,useEffect} from 'react'
import useTitleCount from './useTitleCount'

const Test = () => {
    const [count, setCount] = useState(0)

  useTitleCount(count)


  return (
    <div>
        <h1>Counter</h1>
        <p>Chat {count}</p>
        <button onClick={()=> setCount(count + 1)} >Click Me Test</button>
    </div>
  )
}

export default Test