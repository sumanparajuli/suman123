import React, { useState } from 'react'

const BasicForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [allEntry, setAllEntry] = useState([])

  const submitForm = (e) => {
    e.preventDefault()
    if(email && password){
      let newEntry = { id: new Date().getTime().toString(), email, password }
      setAllEntry([...allEntry, newEntry])
      setEmail("")
      setPassword("")
    }else{
      alert('cannot login with empty credentials')
    }
  }
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' autoComplete='off' value={email} onChange={(e) => { setEmail(e.target.value) }} />

        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name='password' autoComplete='off' value={password} onChange={(e) => { setPassword(e.target.value) }} />

        </div>
        <button type='submit'>Login</button>
      </form>
      <div className="display">
        {
          allEntry.map((curr) => {
            const {id, email, password} = curr
            return <div key={id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          })
        }
      </div>
    </>
  )
}

export default BasicForm