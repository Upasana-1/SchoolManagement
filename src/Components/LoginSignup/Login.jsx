import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
import Validation from '../Loginvalidation'
import Home from './Home/Home';


// Push a new state into the browser's history
function changeLocation() {
  const newState = { page: 'home' }; // The new state object
  const newTitle = 'Home'; // The new page title
  const newUrl = '/home'; // The new URL

  history.pushState(newState, newTitle, newUrl);
  
}


function Login() {
  const [values, setValues] = useState({
    email: '',
    Password: '',
  });

  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // setErrors(Validation(values));
    const error = Validation(event);
    console.log(error)
    if (error.email === "" && error.password === "") {
      // Call the function to change the location and push a new state into the history
      changeLocation();
      const url = window.location.href;
      window.location.replace(url);
      // return true;
    }
    return false;
  }


  /* function Login() {
     const history = useHistory();
     const [values, setValues] = useState({
       email: '',
       password: '',
     });
   
     const [errors, setErrors] = useState({});
   
     const handleInput = (event) => {
       setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
     };
   
     const handleSubmit = (event) => {
       event.preventDefault();
       // Assuming you have a function to validate the login (e.g., check email and password)
       const isValid = validateLogin(values);
   
       if (isValid) {
         // Redirect to the home page after successful login
         history.push('/home');
       } else {
         // Set an error message or perform other actions if the login is invalid
         setErrors({ message: 'Invalid email or password' });
       }
     }
   
   // Login validation
   */
  return (
    <>
      <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl align-content: center;"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome to</span> Mero Vidhyala</h1>
      <p className="text-center text-3xl text-gray-800 dark:text-white">A complete Exam Management System</p>
      <div className='container d-flex justify-content-center align-items-center bg-warning-subtle vh-100'>
        <div className='bg-white p-3 rounded w-255 '>
          <h2>Login Form</h2>


          <form action='' onSubmit={handleSubmit} className='need-validation'>
            <div className='mb-3 was-validated'>
              <label htmlFor='email'><strong>Email</strong></label>
              <input type='email' id='email' placeholder='Email Address' name='email' required
                onChange={handleInput} className='form-control rounded-0'/>
              <div className='invalid-feedback'>
                Please Enter your email address
              </div>
            </div>
            <div className='mb-3 was-validated'>
              <label htmlFor='password'><strong>Password</strong></label>
              <input type='password' id='password' placeholder='Enter password' name='password' required
                onChange={handleInput} className='form-control rounded-0'/>
              <div className='invalid-feedback'>
                Please enter your password
              </div>

            </div>
            <input type='submit' className='btn btn-success w-100 rounded-0' value={'Login'} />
            <div className='form-group form-check mb-2'>
              <input type='checkbox' className='form-check-input'></input>
              <label htmlFor='check' className='form-check-label'>Remember me</label>

            </div>


            <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>

          </form>

        </div>
      </div>
    </>
  )
}

export default Login

