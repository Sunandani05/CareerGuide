import React from 'react';
import { Link } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";


export default function Navbar() {
  return (
    <div className="navStick">
        <div align= "right"className='space-x-4 text-2xl cursor-pointer font-semibold mr-12 '>
          <Link to="/"><button className='bg-gray-500 text-white text-2xl py-1 px-4 rounded-md mt-2'>Home</button></Link>
          <Link to="/adminlogin"><button className='bg-gray-500 text-white text-2xl py-1 px-4 rounded-md mt-2'>Admin</button></Link>
          <Link to="/login"><button className='bg-gray-500 text-white text-2xl py-1 px-4 rounded-md mt-2'>User</button></Link>
        </div>
    </div>
      
  )
}
