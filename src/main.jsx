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
            };*/
            
