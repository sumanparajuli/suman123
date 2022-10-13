import React, {useRef, useState} from 'react'

const Uncontrolled = () => {
    const luckyName = useRef(null)
    const [formShow, setFormShow] = useState({value: '', show: false})

    const submitForm = (e)=>{
        e.preventDefault()
        setFormShow({value: luckyName.current.value, show: true})
    }

  return (
    <div className='d-flex-center flex-col'>
        <h1>Uncontrolled input</h1>
        <form action="" onSubmit={submitForm}>
            <label htmlFor="luckyName">Enter Your Lucky Name</label>
            <input type="text" id='luckyName' ref={luckyName}/>
            <button type='submit'>Submit</button>
        </form>
        {formShow.show ? `Your lucky name is ${luckyName.current.value}`: ''}
    </div>
  )
}

export default Uncontrolled