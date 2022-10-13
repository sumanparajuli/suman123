import React, { useState , useEffect} from 'react'

const UseEffect2 = () => {
    const [width, setWidth] = useState(window.screen.width)
    const actualWidth = ()=>{
        setWidth(window.screen.width)
    }
    useEffect(() => {
        window.addEventListener('resize', actualWidth)
        return ()=>{
            window.removeEventListener('resize', actualWidth)
        }
    }, )
    
  return (
    <div>
        Your window width is {width} pixels.
    </div>
  )
}

export default UseEffect2