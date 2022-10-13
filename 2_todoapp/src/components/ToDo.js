import React, { useState, useEffect } from 'react'

const getLocalItems = ()=>{
    let lists = localStorage.getItem('lists')
    if(lists){
        return JSON.parse(localStorage.getItem('lists'))
    }else{
        return []
    }
}

const ToDo = () => {

    const [input, setInput] = useState('')
    const [inputList, setInputList] = useState(getLocalItems())
    const [toggleButton, setToggleButton] = useState(true)
    const [isEditItem, setIsEditItem] = useState(null)

    const onChange = (e) => {
        setInput(e.target.value)
    }
    const addListItem = () => {
        if(input && !toggleButton){
            setInputList(
                inputList.map((element)=>{
                    if(element.id === isEditItem){
                        return {...element, name: input}
                    }
                    return element
                })
            )
            setIsEditItem(null)
            setInput('')
            setToggleButton(true)
        }
        else if(input){
            setInputList([...inputList, {id:new Date().getTime().toString(), name:input}])
            setInput('')    
        }
    }

    const deleteItem = (index)=>{
        const newInputList = inputList.filter((e, i)=>{
            return index !== i
        })
        setInputList(newInputList)
    }

    const removeAll = ()=>{
        setInputList([])
        setInput('')
    }

    const editItem = (id)=>{
        let newEditedItem = inputList.find((element)=>{
            return element.id === id
        })
        setToggleButton(false)
        setIsEditItem(id)
        setInput(newEditedItem.name)
        
    }
    //add data to local storage
    useEffect(() => {
      localStorage.setItem("lists", JSON.stringify(inputList))
    }, [inputList])
    

    return (
        <div>
            <div className="">
                <div className="input-field text-center">
                    <h1 className="text-4xl py-4">The Best ToDo App | Use it RIGHT NOW !!!</h1>
                    <input type="text" name="addtodo" id="addtodo" className="font-serif rounded-sm w-1/4 outline-double mx-3 px-2 py-3" onChange={onChange} value={input}/>
                    {toggleButton?<button className="bg-purple-700 text-white mx-3 px-2 py-3" onClick={addListItem}>Add To the List</button>:
                    <button className="bg-purple-700 text-white mx-3 px-2 py-3" onClick={addListItem}>Edit Item</button>
                    }
                </div>

                <div className="list-items">
                    <div className="listitem text-center">
                        <ul className='my-3'>



                            {inputList.map((element, index) => {
                                return <div key={element.id}>
                                    <li className='py-2 px-2 block'>{element.name}</li>
                                    <button className="py-2 bg-slate-900 text-white hover:bg-slate-500 rounded-lg px-2 mx-2 my-2 "onClick={()=>{deleteItem(index)}}>Delete</button>
                                    <button className="bg-green-400 px-2 py-2 rounded-md" onClick={()=>{editItem(element.id)}}>Edit</button>
                                    </div>
                            })}

                        </ul>
                    </div>
                    <div className="removeBtn text-center">
                        <button className='py-2 px-2 bg-slate-500 rounded-md' onClick={removeAll}>Remove All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDo