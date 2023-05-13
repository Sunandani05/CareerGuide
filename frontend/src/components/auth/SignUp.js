import React,{useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import { SignUpval } from "../../actions";
import 'react-toastify/dist/ReactToastify.css';
import {  Navigate } from "react-router-dom";

export default function SignUp({ setAuthState }) {
    const [data, setData] = useState({
        name:'',
        email:'',
        mobile:'',
        gender:'',
        dob:'',
        qualification:'',
        school_clz:'',
        specialization:'',
        password:'',
        confirmpassword:''

    });
  
  
  const notify = (message) => {
    toast(message);
  }
  const changeHandler = (e) =>{
    const { name, value } = e.target;
    setData(data => ({
      ...data,
      [name]: value
    }));
    }
  console.log(data)

  const HandleSubmit = async(event) => {
    event.preventDefault();
    console.log(data)

  try {
    const response = await SignUpval(data)
    console.log(response)
         if(response.data.email !== ""){
              const notifyPromise1 = notify("User Registration Successful")
              const notifyPromise2 = notify("Please Login")
              setTimeout(() => {
                setAuthState('login'); // Set auth state to 'login' after both notifications have been displayed
              }, 3000);
              
             
              }
         
  } catch (error) {
    console.log(error); 
    notify("Something went wrong Try Again")
  }

   
  };
 
  

    return (
        <div>
        <ToastContainer />
        <div className="container  mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-lg text-black border border-black w-4/4">
                <form onSubmit={HandleSubmit}>
                    <h1 className="mb-8 text-4xl font-semibold text-center">Sign up</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        onChange={changeHandler}
                        placeholder="Full Name" />

                    <input
                        type="email"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Email" />

                    <input
                        type="mobile"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="mobile"
                        maxLength="10"
                        onChange={changeHandler}
                        placeholder="Mobile" /> 
                        
                   <select id="gender" onChange={changeHandler} required name="gender" class="block border border-grey-light w-full p-3 rounded mb-4">
                   <option value="" disabled>Gender</option>
                   <option value="male">Male</option>                   
                   <option value="female">Female</option>
                   <option value="nonbinary">Non-binary</option>
                   </select>

                    <input class="block border border-grey-light w-full p-3 rounded mb-4"
                    type="date"
                    placeholder="MM/DD/YYYY"
                    name="dob"
                    value="dob"
                    onChange={changeHandler}
                    //required
                    />
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="qualification"
                        onChange={changeHandler}
                        placeholder="Qualification" /> 
                    
                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="school_clz"
                        onChange={changeHandler}
                        placeholder="School/college" />

                   <select id="specialization" onChange={changeHandler} name="specialization" class="block border border-grey-light w-full p-3 rounded mb-4">
                   <option value="" disabled>Specialization</option>
                   <option value="MPC">MPC</option>
                   <option value="BiPC">BiPC</option>
                   <option value="Other">Other</option>
                   </select>
                    

                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        onChange={changeHandler}
                        placeholder="Password" />
                    <input
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirmpassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        
                        className="w-full text-center py-3 rounded bg-gray-900 text-white hover:bg-black-600 focus:outline-none my-1">Create Account
                    </button>
                </form>

                <div className="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the Terms of Service and Privacy Policy
                </div>
               
            </div>
            <div className="text-gray-dark mt-6"align="center">
                Already have an account?
                <button
                    //className="no-underline border-b border-black text-black font-semibold cursor-pointer"
                onClick={() => setAuthState('login')}    >Log in</button>.
            </div>

            
        </div>
        </div>
    )
}
