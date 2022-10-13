import React, { useState } from 'react'

const Login = () => {
  const [data, setData] = useState({email: '', password: ''})
  const URL = 'http://localhost:2000'
  const handleLogin = async (e) => {
    e.preventDefault()
    // const response = await fetch(`${URL}/api/auth/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    console.log(data)
  }

  const onChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value})
  }

  return (
    <div className='container'>
      <form className='margin-top-all'>
        <h1 className='my-3'>Login to Travel Log</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name='email' onChange={onChange} value={data.email}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={onChange} value={data.password}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login