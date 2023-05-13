import React, { useEffect, useState } from 'react'
import Login from '../components/auth/Login'
import SignUp from '../components/auth/SignUp'
import Navbar from '../components/LandingPage/Navbar'
import "./Auth.css"
export default function Authentication() {
  const [authState, setAuthState] = useState('login')
  

  return (
    <div>
      <div className="auth-container">
      <div className=''>
          <Navbar />
         
      </div>
     {authState === 'login' && (
        <Login setAuthState={setAuthState} />
      )}
      {authState === 'signup' && <SignUp setAuthState={setAuthState} />}
    </div>
    </div>
  
 
  )
}