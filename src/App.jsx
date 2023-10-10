import React from 'react'
import './App.css'
import Login from './Components/LoginSignup/Login'
import Signup from './Components/Signup'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//<h1 className='text-5xl'>Welcome to Mero Vidhyala</h1>
//<Login/> 

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Login />
    <Route path='/' element={<Login />}></Route> 
    <Route path='/signup' element={<Signup />}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App




