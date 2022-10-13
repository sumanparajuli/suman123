import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex'>
        <div className="firstsec w-1/2 text-center">
            <img src={require('./img/me.jpg')} alt="" className='rounded-t-full w-60 m-auto py-2'/>
            <h1 className='text-3xl font-thin'>Suman Parajuli</h1>
            <marquee className='w-72'>------ Learning (Web+Security) ------</marquee>
            <h2>Build with React Js + TailWind CSS</h2>
        </div>
        <div className="secondsec w-1/2">
            <ul className='w-1/2 flex space-x-3'>
                <li><Link to="/aboutmih">About Me</Link></li>
                <li><Link to="/whatino">Why me</Link></li>
                <li><Link to='/contactmih'>Contact Me</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default About