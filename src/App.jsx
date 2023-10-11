import React from 'react'
import './App.css'
// import Validation from './Components/Loginvalidation'
// import Signupvalidation from './Components/LoginSignup/Signupvalidation'
import Login from './Components/LoginSignup/Login'
import Signup from './Components/Signup'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//<h1 className='text-5xl'>Welcome to Mero Vidhyala</h1>
//<Login/> 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App




