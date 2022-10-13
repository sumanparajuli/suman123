import React from 'react'

const Banner = () => {
  return (
    <div>
        <div className="bg-slate-200 h-96 px-10 flex items-center justify-end">
        <div className="left">
            <div className="text-5xl pt-20">
                The best todo app in the town
            </div>
            <div className="pl-2 py-2 w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, unde blanditiis accusantium ut,
                sapiente pariatur nihil laudantium doloremque sit neque rerum nulla?
            </div>
            <div className="buttons pl-2">
                <button className="bg-purple-600 rounded-2xl py-2 px-2 text-white hover:bg-slate-300 mx-2">Clickme</button>
                <button
                    className="bg-slate-300 rounded-2xl py-2 px-2 hover:bg-purple-400 hover:text-white mx-2">ClickUp</button>
            </div>
        </div>
        <div className="right">
            <img src={require("./img/iphone.webp")} className="pt-20" alt=""/>
        </div>
    </div>
    </div>
  )
}

export default Banner