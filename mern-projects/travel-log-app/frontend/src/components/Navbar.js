import React,{useState} from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [navState, setNavState] = useState('shadow-5-strong')
    window.addEventListener('scroll', ()=>{
        let scroll = window.scrollY > 50
        if(scroll){
            setNavState('bg-light')
        }else{
            setNavState('shadow-5-strong')
        }
        
    })
    return (
        
        
        <>
            <nav className={`navbar navbar-expand-lg fixed-top ${navState}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Discuss">Discuss</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            
                           
                        </ul>
                        <Link className="btn btn-primary mx-1" to='/login'>Login</Link>
                        <Link className="btn btn-success" to='/signup'>Create Account</Link> 
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar