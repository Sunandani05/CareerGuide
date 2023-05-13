
import React, { useState, useEffect, useHistory } from "react";
import Navbar from '../LandingPage/Navbar'
import { ToastContainer, toast } from "react-toastify";
import { AdminLoginval } from "../../actions";
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "./adminauth";
import {  Navigate, useNavigate, Link } from "react-router-dom";


export default function AdminLogin( ) {
  
    const navigate=useNavigate()
    const { authenticated, login, logout } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState(false);
    
    const notify = (message) => {
      toast(message);
    }
   

    const HandleSubmit = async(event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      const data = { email, password }; 
      console.log(data)

    try {
      const response = await AdminLoginval(data); 
      console.log(response);
          if(response.data.message === "Logged in successfully" && response.data.token !== ""){
                notify("Login Successful")
                localStorage.setItem('token',response.data.token);
                setAuth(true)
                //login('token');
                console.log(localStorage.getItem('token'))
                }
          else
                notify("Invalid Login")
    
    } catch (error) {
      console.log(error); 
      notify("Invalid Login")
    }

      
    };

    if(auth)
    {
       return<Navigate to="/adminDashboard" />
      
    }
    
  

    return (
        <div>
            <ToastContainer />
      <div className="auth-container">
      <div className=''>
          <Navbar />
         
      </div>
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black border border-black w-full">
            <form onSubmit={ HandleSubmit }>
                <h1 className="mb-8 text-4xl font-semibold text-center">Admin Login</h1>

                <div className='flex flex-col space-y-4 my-16'>
                    <input
                        type="text"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        className="block border border-gray-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
                    <button
                        className=" relative top-6 w-full text-center py-3 rounded bg-gray-700 text-white hover:bg-gray-500 focus:outline-none my-6">Login
                        </button>
                </div>
                </form>
                
            </div>
        </div>
    </div>
    </div>
    
    )}


    