import React from 'react'
import { useDispatch } from 'react-redux'
import { disableNav, enableNav } from '../action'
import { useState } from 'react'

const Main = () => {
    const dispatch = useDispatch()
    const onChange = (e)=>{
        if(e.target.checked){
            console.log('i am checked')
            dispatch(disableNav())
            document.body.classList.add('bg-black');
        }else{
            dispatch(enableNav())
            console.log('i am not checked')
            document.body.classList.remove('bg-black');
        }
    }

    //Calculator logic
    const [keypress, setKeypress] = useState('')
    
    const press = (event)=>{
        setKeypress(keypress.concat(event.target.name))
    }

    const result = ()=>{
        try {
            setKeypress(eval(keypress) + "")
        } catch (error) {
            setKeypress(`${error}`)
        }
    }

    const clear = ()=>{
        setKeypress('')
    }

    const turnon = ()=>{
        setKeypress('')
    }

    const backspace = ()=>{
        setKeypress(keypress.slice(0, -1))
    }

    return (
        <div className='text-center flex-column'>
            <h1>Disable navlinks</h1>
            <div className='button-holder'>
                <label className="switch">
                    <input type="checkbox" onChange={onChange}/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="calculator">
                <div className="display">
                    {keypress}
                </div>
                <div className="keys">
                    <button className="key" name="AC" onClick={turnon}>AC</button>
                    <button className="key" name="C" onClick={clear}>C</button>
                    <button className="key" name="BS" onClick={backspace}>BS</button>
                    <button className="key" name="/" onClick={press}>/</button>
                    <button className="key" name="7" onClick={press}>7</button>
                    <button className="key" name="8" onClick={press}>8</button>
                    <button className="key" name="9" onClick={press}>9</button>
                    <button className="key" name="*" onClick={press}>&times;</button>
                    <button className="key" name="4" onClick={press}>4</button>
                    <button className="key" name="5" onClick={press}>5</button>
                    <button className="key" name="6" onClick={press}>6</button>
                    <button className="key" name="-" onClick={press}>-</button>
                    <button className="key" name="1" onClick={press}>1</button>
                    <button className="key" name="2" onClick={press}>2</button>
                    <button className="key" name="3" onClick={press}>3</button>
                    <button className="key" name="+" onClick={press}>+</button>
                    <button className="key" name="0" onClick={press}>0</button>
                    <button className="key" name="." onClick={press}>.</button>
                    <button className="key" name="Ans" onClick={press}>Ans</button>
                    <button className="key" name="" onClick={result}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Main