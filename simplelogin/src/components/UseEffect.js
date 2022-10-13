import React, {useState,useEffect} from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        count > 0 ? document.title = `Chats (${count})` : document.title = 'Chats'
        
    });


  return (
    <div>
        <h1>Counter</h1>
        <p>Chat {count}</p>
        <button onClick={()=> setCount(count + 1)} >Click Me</button>
    </div>
  )
}

export default UseEffect