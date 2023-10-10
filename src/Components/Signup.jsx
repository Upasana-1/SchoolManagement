import React from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center bg-primary vh-100'>
     <div className='bg-white p-3 rounded w-255 '>
     <h2>Sign up</h2>
    <form action=''>
    <div className='mb-3'>
    <label htmlFor='name'><strong>Name</strong></label>
    <input type='text' placeholder='Enter Name' className='form-control rounded-0' />
    </div>
    <div className='mb-3'>
    <label htmlFor='password'><strong>Password</strong></label>
    <input type='password' placeholder='Enter password' className= 'form-control rounded-0'/>
    </div>
    <div className='text'>

    </div>
    <input type='submit' className='btn btn-success w-100 rounded-0' value={"Sign up"} />
    <p>Remember me</p>
    <Link to ="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
    </form>
    </div>
    </div>
    
  )
} 

export default Signup  
