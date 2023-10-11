import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Login() {
  const [values, setValues] = useState({
    email: '',
    Password: '',
  })
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

  }

  return (
    <div className='container d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-255 '>
        <h2>Sign  In</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' id='email' placeholder='Email Address' name='email'
              onChange={handleInput} className='form-control rounded-0' />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' id='password' placeholder='Enter password' name='password'
              onChange={handleInput} className='form-control rounded-0' />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0' >Login </button>
          <p>Remember me</p>
          <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
        </form>
      </div>
    </div>

  )
}

export default Login

