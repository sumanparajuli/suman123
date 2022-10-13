import React from 'react'
import { useLocation } from 'react-router-dom'
const Features = () => {
    const location = useLocation()
  return (
    <div>
        <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Features route is {location.pathname}</h1>
                    <p className="col-md-8 fs-4">Hello BootStrap. I'm Features</p>
                    <button className="btn btn-primary btn-lg" type="button">Nothing happens!</button>
                </div>
            </div>
    </div>
  )
}

export default Features