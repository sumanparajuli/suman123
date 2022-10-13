import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
       <nav className="bg-purple-900 text-white flex items-center justify-between ">
        <img src={require('./img/logo.jpg')} className="rounded-full mx-10 w-20 mt-2 mb-2 " alt="" />
        <ul className="flex px-2 py-4 space-x-20 mx-32 justify-end ">
            <li className="cursor-pointer"><Link to={"/"}>Home</Link></li>
            <li className="cursor-pointer"><Link to={"/about"}>About</Link></li>
            <li className="cursor-pointer"><Link to={"/todolist"}>Let's Todo</Link></li>
            <li className="cursor-pointer"><Link to={"/contact"}>Contact</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar