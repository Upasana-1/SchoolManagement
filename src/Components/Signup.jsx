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
<>
<h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl align-content: center;"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome to</span> Mero Vidhyala</h1>
    <p class="text-center text-3xl text-gray-800 dark:text-white">A complete Exam Management System</p>
    <div className='container d-flex justify-content-center align-items-center bg-warning-subtle vh-100'>
      <div className='bg-white p-3 rounded w-255 '>
        <h2>Sign-Up</h2>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3 was-validated'>
            <label htmlFor='name'><strong>User Name</strong></label>
            <input type='text' placeholder='Enter Name' name='name' required
              onChange={handleInput} className='form-control rounded-0'></input>
            <div className='invalid-feedback'>
            Please Enter User name
            </div>
          </div>
          <form action='' onSubmit={handleSubmit}>
        <form className='need-validation'>
          <div className='mb-3 was-validated'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='email' id='email' placeholder='Email Address' name='email' required
            onChange={handleInput} className='form-control rounded-0'></input>
<div className='invalid-feedback'>
Please Enter your email address
</div>
</div>
          <div className='mb-3 was-validated'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input type='password' id='password' placeholder='Enter password' name='password' required
              onChange={handleInput} className='form-control rounded-0'></input>
              <div className='invalid-feedback'>
              Please enter your password
              </div>
          
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0' >Login </button>

          
          <div className='form-group form-check mb-2'>
         <input type='checkbox' className='form-check-input'></input>
         <label htmlFor='check' className='form-check-label'>Remember me</label>

          </div>
          

    
        </form>
        </form>
        </form>
     </div>
     </div>
     </>
  )
}

export default Signup  
