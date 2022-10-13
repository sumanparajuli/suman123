import React, { useState } from 'react'

const Signup = () => {
  const [data, setData] = useState({ name: '', email: '', password: '', cpassword: '' })
  const URL = 'http://localhost:2000'
  const handleSignup = async (e) => {
    e.preventDefault()
    const response = await fetch(`${URL}/api/auth/signup`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log('data', data)
    const serverData = await response.json()
    console.log('Server says : ', serverData)
  }

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <div className="container">
      <form className='margin-top-all'>

      <h1 className='my-3'>Create An Account on Travel Log</h1>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onChange} value={data.name} />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} value={data.email} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={data.password} />
        </div>

        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} value={data.cpassword} />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSignup}>Create Account</button>
      </form>
    </div>
  )
}

export default Signup