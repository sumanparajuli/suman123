import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const state  = useSelector((state)=> state.changeNavState)

  return (
    <div>
        <header >
            <h1>Redux Demo</h1>
            <nav>
                {state && <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><a href="#pricing">pricing</a></li>
                </ul>}
            </nav>
        </header>
    </div>
  )
}

export default Navbar