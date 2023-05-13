import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Loginval } from "../../actions";
import 'react-toastify/dist/ReactToastify.css';
import {  Navigate } from "react-router-dom";

export default function Login({ setAuthState }) {
    const [loginauth, setLoginAuth] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
      const response = await Loginval(data); 
      console.log(response);
          if(response.data.message === "User Logged in successfully" && response.data.token !== ""){
                notify("Login Successful")
                localStorage.setItem('user_token',response.data.token);
                const myObject = JSON.stringify(response.data.foundUser);
                localStorage.setItem('LoggedInuser',myObject);
                setLoginAuth(true);
                console.log(response.data.token)
                

                }
          else
                notify("Invalid Login")
    
    } catch (error) {
      console.log(error); 
      notify("Invalid Login")
    }
    };
    
    if(loginauth)
    {
        return <Navigate to='/weGuide' />

    }
    return (
        <div>
            <ToastContainer />
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black border border-black w-full">
            <form onSubmit={HandleSubmit}>
                <h1 className="mb-8 text-4xl font-semibold text-center">Log in</h1>

                <div className='flex flex-col space-y-4 my-16'>
                    <input
                        type="text"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        className="block border border-gray-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input
                        type="password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <button
                        
                        type="submit"
                        className=" relative top-6 w-full text-center py-3 rounded bg-gray-700 text-white hover:bg-gray-500 focus:outline-none my-6">Login
                    </button>
                </div>


            </form>

            <div className="text-center text-sm text-black-dark mt-4">
                By signing up, you agree to the Terms of Service and Privacy Policy
            </div>
        </div>

        <div className="text-black-300 mt-6">
            Don't have an account?
            <button
                className="no-underline border-b border-black text-black font-semibold cursor-pointer"
                onClick={() => setAuthState('signup')}>Sign up</button>.
        </div>
    </div>
    </div>











    )
}
