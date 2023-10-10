import React, { useState } from 'react'  
import { Link  } from 'react-router-dom' 


function Login() { 
  const [values, setValues] = useState({
    email: '',
     Password: '',
  })
  const[errors, setErrors] = useState({ })
    const handleInput = (event) => {
      setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }


  const handleSubmit = (event) => {
    event.preventDefault();
    setValues(validate(values));
    
  }

  


  return ( 
    <div className='container d-flex justify-content-center align-items-center bg-primary vh-100'>
     <div className='bg-white p-3 rounded w-255 '>
     <h2>Sing In</h2>
    <form action='' onSubmit={handleSubmit}>
    <div className='mb-3'>
    <label htmlFor='email'><strong>Email</strong></label>
  <input type='email' placeholder='Email Address'  
    onChange={handleInput} className='form-control rounded-0' />
    </div>
    <div className='mb-3'>
    <label htmlFor='Password'><strong>Password</strong></label>
    <input type='password' placeholder='Enter password' className= 'form-control rounded-0'/>
    </div>
    <button type='submit' className='btn btn-success w-100 rounded-0'> <strong>Login</strong></button>
    <p>Remember me</p>
    <link to ="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</link>
    </form>
    </div>
    </div>
    
  )
}

export default Login

