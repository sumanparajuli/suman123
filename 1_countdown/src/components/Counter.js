import React,{useState, useEffect} from 'react'

const Counter = () => {
  const [date, setDate] = useState(new Date())
  const [number, setNumber] = useState(0)
  const plus = ()=>{
    setNumber(number + 1)
  }
  const minus = ()=>{
    setNumber(number-1)
  }

  function refreshClock(){
    setDate(new Date())
  }

  useEffect(()=>{
    const timerid = setInterval(refreshClock, 1000)
    return function cleanup(){
      clearInterval(timerid)
    }
  },[])
  return (
    <div>
      <h1 className='cntr'>Countdown app</h1>
      <p className='cntr'>{date.toString()}</p>
      <p className='number cntr'>{number}</p>
      <span className='minus margin' onClick={minus}>-</span>
      <span className='plus margin' onClick={plus}>+</span>
    </div>
  )
}

export default Counter
