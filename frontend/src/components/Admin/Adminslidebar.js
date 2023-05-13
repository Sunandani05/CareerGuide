import React from "react";
import AdminSlidebarActions from './AdminSlidebarActions';
import DeleteUsers from './DeleteUser';
import { useState } from "react";
import {Navigate, useLocation} from "react-router-dom";
import DisplaySkills from "./DisplaySkills";
import DeleteSkills from "./DeleteSkills";
import AddSkills from "./AddSkills";
import AddExperts from "./AddExpert";
import DeleteExperts from "./DeleteExpert";
import Home from "./Home";


const Adminsidebar=()=>{

    const [active, setActive] = useState("Home");
    const location = useLocation();
    const [auth, setAuth] = useState(true);
    const [display, setDisplay] = useState(false);
    //console.log(auth)
      
    const HandleLogout = () => {
          console.log("auth")
          console.log(auth)
          localStorage.removeItem('token');
          setAuth(false);
          location.state.auth="";
          console.log("auth")
          console.log(auth)
      }
      
      if (!localStorage.getItem('token')) {
          return <Navigate to="/" />;
        }
    return(
        <div>
            <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-gray transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div className='p-3 flex text-4xl font-bold  text-gray-600 py-1 ml-0 mt-2 rounded-full'>
                        <span className="pl-3">CareerGuide</span>
                    </div>

                    <div class="mt-8 text-center">
                        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Welcome</h5>
                        <span class="hidden text-gray-400 lg:block">Admin</span>
                    </div>

                    <ul class="space-y-2 tracking-wide mt-8">
                        <li>
                        <button onClick={() => setActive("skills")} href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 18.333A8.333 8.333 0 1118.333 10 8.334 8.334 0 0110 18.333zm0-3.333a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667zM8.75 7.5a.833.833 0 11-1.666 0 .833.833 0 011.666 0zm5 0a.833.833 0 11-1.666 0 .833.833 0 011.666 0z"/>
                                </svg>
                                Display Skills
                        </button>
                        </li>
                        <li>
                        <button onClick={() => setActive("addSkills")} href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zM8.333 10c0-.46.373-.833.833-.833h1.666V7.5c0-.46.373-.833.833-.833s.833.373.833.833v1.667h1.666c.46 0 .833.373.833.833s-.373.833-.833.833H11.5v1.666c0 .46-.373.833-.833.833s-.833-.373-.833-.833V11.67H8.333a.833.833 0 01-.833-.833z"/>
                                    </svg>
                                    Add Skills
                                    </button>
                        </li>
                        <li>
                        <button onClick={() => setActive("deleteSkills")} href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M15.833 3.333h-2.5v-.834c0-.46-.373-.833-.833-.833H8.5c-.46 0-.833.373-.833.833v.834h-2.5a.833.833 0 00-.833.833v.834c0 .46.373.833.833.833h12.5c.46 0 .833-.373.833-.833v-.834a.833.833 0 00-.833-.833zM9.167 4.167h1.666v-.834H9.167v.834zm4.166 0h1.666v-.834h-1.666v.834zM4.167 6.667v9.166c0 .46.373.833.833.833h9.166c.46 0 .833-.373.833-.833v-9.166H4.167zm7.5 7.5a.833.833 0 11-1.666 0 .833.833 0 011.666 0zm-3.333 0a.833.833 0 11-1.666 0 .833.833 0 011.666 0z"/>
                                    </svg>
                                    Delete Skills
                                    </button>
                        </li>
                        <li>
                        <button onClick={() => setActive("displayUsers")}  class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M15.833 13.333c-1.364 0-2.5 1.114-2.5 2.5s1.136 2.5 2.5 2.5 2.5-1.114 2.5-2.5-1.136-2.5-2.5-2.5zM9.167 10c1.364 0 2.5-1.114 2.5-2.5S10.53 5 9.167 5s-2.5 1.114-2.5 2.5S7.804 10 9.167 10zM4.167 15c0-.46.373-.833.833-.833h9.166c.46 0 .833.373.833.833v.833H4.167v-.833z"/>
                                        <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M5 5.833v8.334c0 .46.373.833.833.833H14.17c.46 0 .83-.373.83-.833V5.833H5z"/>
                                    </svg>
                                   Display Users
                                    </button>
                        </li>
                        <li>
                        <button onClick={() => setActive("deleteUsers")} href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M15.95 3.95a5 5 0 11-7.07 7.07l-3.54 3.54-1.41-1.41 3.54-3.54a5 5 0 017.07-7.07zm-2.83 2.83a3 3 0 10-4.24 4.24l4.24 4.24a3 3 0 104.24-4.24l-4.24-4.24z"/>
                                        <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M3.333 16.667h13.334v-2.5c0-.46-.373-.833-.833-.833H4.166c-.46 0-.833.373-.833.833v2.5zM14.167 7.5h-8.33L5 6.667H3.333V5h1.666L5.837 2.5h8.326l1.171 2.167h1.666v1.667h-1.666l-.836 1.667z"/>
                                    </svg>
                                    Delete Users
                                    </button>
                        </li>
                        <li>
                        <button onClick={() => setActive("addExpertGuidance")} href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M17 14h-3.586l1.293-1.293c.195-.195.195-.512 0-.707l-.707-.707a.5.5 0 00-.707 0L10 13.293 8.707 12a.5.5 0 00-.707 0l-.707.707a.5.5 0 000 .707l1.293 1.293H3v2h14v-2z"/>
                                        <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M4.999 4.999A4.001 4.001 0 0110 2a4.001 4.001 0 014.001 2.999l.929 2.207a.5.5 0 00.471.327l3.035.268a.5.5 0 01.554.553l-.268 3.036a.5.5 0 00.327.471l2.208.929A4.001 4.001 0 0118 14.001a4.001 4.001 0 01-2.999 3.999l-2.207.929a.5.5 0 00-.327.471l-.268 3.036a.5.5 0 01-.553.554l-3.036-.268a.5.5 0 00-.471.327l-.929 2.208A4.001 4.001 0 012 18.001a4.001 4.001 0 012.999-2.999l2.207-.929a.5.5 0 00.327-.471l.268-3.035a.5.5 0 01.554-.554l3.035.268a.5.5 0 00.471-.327l.929-2.208z"/>
                                    </svg>
                                    Add Expert Guidance
                                    </button>
                        </li>
                        <li>
                        <button onClick={() => setActive("deleteExpertGuidance")} href="#" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M15 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5h10zm-8-2h4v2H7V3zm6 0h2v2h-2V3zM8 7h4v8H8V7z"/>
                                    </svg>
                                   Delete Expert Guidance
                                    </button>
                        </li>
                        </ul>
                </div>
                <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <button  onClick = {HandleLogout} class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </div>
            </aside>
          
            <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                    <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
                    <div style={{float: 'right'}}>
                    <h7
                    hidden
                    className="text-2xl text-gray-600 font-medium lg:block text-center py-4"
                    style={{
                    borderRadius: "50px",
                    width: "200px",
                    position: "absolute",
                    right: "0",
                    marginRight: "50px",
                    }}
                    >
                    <button onClick={() => setActive("Home")} 
                    style={{ backgroundColor: "gray", color: "white", borderRadius: '5px',height: "30px" }}>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 3.5L3.5 9v7.5h4v-4h5v4h4V9L10 3.5zM7 17.5v-5h6v5h5V9.44L10 4.22 2 9.44V17.5h5z" />
                        </svg>

                    </button>
                    </h7>
                    
                    </div>
                      <button class="w-12 h-16 -mr-2 border-r lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {active === "displayUsers" &&
                    <div className="px-6 pt-6 2xl:container">
                        <AdminSlidebarActions />
                    </div>
                }
                {active === "deleteUsers" &&
                    <div className="px-6 pt-6 2xl:container">
                        <DeleteUsers />
                    </div>
                }
                 {active === "skills" &&
                    <div className="px-6 pt-6 2xl:container">
                            <DisplaySkills />                        
                    </div>
                }
                  {active === "addSkills" &&
                    <div className="px-6 pt-6 2xl:container">
                            <AddSkills />                        
                    </div>
                }
                {active === "deleteSkills" &&
                    <div className="px-6 pt-6 2xl:container">
                        <DeleteSkills />
                    </div>
                }
                {active === "addExpertGuidance" &&
                    <div className="px-6 pt-6 2xl:container">
                        <AddExperts />
                    </div>
                }
                {active === "deleteExpertGuidance" &&
                    <div className="px-6 pt-6 2xl:container">
                        <DeleteExperts />
                    </div>
                }
                {active === "Home" &&
                    <div className="px-6 pt-6 2xl:container">
                     <Home />
                    </div>
                }
            </div>
         </div>


    )
}

export default Adminsidebar;