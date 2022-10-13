import React, { useState, useEffect } from 'react'
import UI from './UI'
//to get item from local storage
const getLocalItems = () => {
    let lists = localStorage.getItem('lists')
    console.log(lists)
    if (lists) {
        return JSON.parse(localStorage.getItem('lists'))
    } else {
        return []
    }
}
const Todo = () => {
    const [inputData, setInputData] = useState('')
    const [items, setItems] = useState(getLocalItems())
    const [toggleSubmit, setToggleSubmit] = useState(true)
    const [isEditItem, setIsEditItem] = useState(null)

    const addItem = () => {
        if (!inputData) {

        } else if (inputData && !toggleSubmit) {
            console.log('i am fired')
            setItems(
                items.map((element) => {
                    if (element.id === isEditItem) {
                        return { ...element, name: inputData }
                    }
                    return element;
                })
            )
            setToggleSubmit(true)

            setInputData('')

            setIsEditItem(null)
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData])
            setInputData('')
        }
    }

    const deleteItem = (id) => {
        const updatedItemsAfterDeletion = items.filter((element) => {
            return id !== element.id
        })
        setItems(updatedItemsAfterDeletion)
    }

    const editItem = (id) => {
        let newEditItem = items.find((element) => {
            return id === element.id
        })
        console.log(newEditItem)

        setToggleSubmit(false)

        setInputData(newEditItem.name)

        setIsEditItem(id)
    }


    const removeAll = () => {
        setItems([])
    }

    //add data to local storage
    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(items))
    }, [items])


    return (
        <>
            <UI inputData={inputData} setInputData={setInputData} toggleSubmit={toggleSubmit} addItem={addItem} items={items} editItem={editItem} deleteItem={deleteItem} removeAll={removeAll}/>
        </>
    )
}

export default Todo