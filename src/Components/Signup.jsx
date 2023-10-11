import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginSignup/Signupvalidation'

const Signup = () => {

  const [values, setValues] = useState({
    name: '',
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
        <h2>Sign-Up</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'><strong>Name</strong></label>
            <input type='text' placeholder='Enter Name' name='name'
              onChange={handleInput} className='form-control rounded-0' />
              {errors.email && <span className='text-danger'>{errors.name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' placeholder='Email Address' name='email'
              onChange={handleInput} className='form-control rounded-0' />
              {errors.password && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' placeholder='Enter password'
              className='form-control rounded-0' />
          </div>
          <div className='text'>

          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0' >Sign up </button>
          <p>Remember me</p>
          <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
        </form>
      </div>
    </div>

  )
}

export default Signup  
