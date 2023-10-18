import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* 
const  Login = () => {
                const[isLoggedIn, setLoggedIn] = useState(false);
            
            useEffect(() => {
            setIsLoggedIn(true);
            }, []);
            
            if (isLoggedIn) {
            return <Navigate to="/home" />; }
            else {
            return <div>{"Login Please"}</div>
            }
            };

            import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const Home = () => {
  const[open, setOpen] = useState(true);
  return (
    <div className='flex'>
    <div className='bg-purple-400 h-screen p-5 pt-8 w-72'>
    <BsArrowLeftShort className='bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border
    border-dark-purple cursor-pointer'  onClick={()=>StereoPannerNode(!open)}/> 
    
    <div className="p-7">
    <h1 className='text-2xl font-semibold'>Home Page</h1>
    </div>
    </div>
    </div>
  )
}

export default Home
            
            
            */





/*  Home  

import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";


const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
    <div className={`bg-purple-400 h-screen p-5 pt-8 ${open ? 'w-72' : 'w:20'} duration-300 relative`} > 
    <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border
    border-dark-purple cursor-pointer ${!open && 'rotate-180' }`}
    onClick={() => setOpen(!open)}/> 
    </div>
  
    <div className='p-7'>
    <div className='text-2xl font-semibold'>Home Page </div>
    </div>
    </div>
  )
}

export default Home; */

            
