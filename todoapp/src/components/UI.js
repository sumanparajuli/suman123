import React from 'react'
import todo from '../images/todo.png'


const UI = (props) => {
    return (
        <>
            <div className="main bg-slate-600 h-screen">
                <div className="text-center">
                    <img src={todo} alt="todoimage" className='w-60 m-auto pt-5' />
                    <h1 className='text-3xl pb-3 text-white'>Add your Notes Here</h1>

                    <div className="addItems relative w-fit m-auto">
                        <input type="text" className='w-72 pr-8 pl-2 py-2' placeholder='Add items here...' value={props.inputData} onChange={(e) => { props.setInputData(e.target.value) }} />
                        {props.toggleSubmit ?
                            <i className="fa-solid fa-plus cursor-pointer text-black text-xl absolute right-2 bottom-2 hover:text-sky-400" title='add items' onClick={props.addItem}></i> :
                            <i className="fa-solid fa-pen-to-square cursor-pointer text-black text-xl absolute right-2 bottom-2 hover:text-sky-400" title='update items' onClick={props.addItem}></i>}
                    </div>

                    <div className="showItems w-72 m-auto text-left py-3">
                        {props.items.map((element) => {
                            return (
                                <div className="eachItem bg-purple-500 py-2 mt-3 relative" key={element.id}>
                                    <p className='text-sm mx-2 text-white'>{element.name}</p>
                                    <i className="fa-solid fa-pen-to-square absolute right-7 bottom-2 hover:text-red-600 cursor-pointer" title="edit item" onClick={() => { props.editItem(element.id) }}></i>
                                    <i className="fa-solid fa-trash absolute right-2 bottom-2 hover:text-red-600 cursor-pointer" title="delete item" onClick={() => { props.deleteItem(element.id) }}></i>

                                </div>
                            )
                        })}
                    </div>

                    <div className="checkall">
                        <button data-sm-link-text="remove all" className='bg-slate-200 px-3 py-2 rounded-md hover:bg-blue-700 hover:text-white' onClick={props.removeAll}>REMOVE ALL</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default UI