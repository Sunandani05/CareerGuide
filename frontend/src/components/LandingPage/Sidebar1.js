import React, {  useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useLocation} from "react-router-dom";
import WeGuide from '../../pages/weGuide';
import ShowRoadmap from '../Roadmaps/RoadmapTemplate';
import ExpertGuidance from '../User/ExpertGuidance';
import Recommendedroute from '../User/Recoomend';
import DisplayProfile from '../User/DisplayProfile';


const Sidebar1 = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState("UserHome");
    const location = useLocation();
    const [auth, setAuth] = useState(true);

    
    const HandleLogout = () => {
          console.log("auth")
          console.log(auth)
          localStorage.removeItem('user_token');
          setAuth(false);
          location.state.auth="";
          console.log("auth")
          console.log(auth)
      }
      
      if (!localStorage.getItem('user_token')) {
          return <Navigate to="/" />;
        }
   
    return (
        <div>
            <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-gray transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                 
                <h3 class="hidden mt-4 text-4xl font-bold text-gray-600 lg:block">CareerGuide</h3>


                    <div class="mt-8 text-center">
                        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Dashboard</h5>
                        <span class="hidden text-gray-400 lg:block">Student</span>
                    </div>

                    <ul class="space-y-2 tracking-wide mt-8">
                    <li>
                        <button onClick={() => setActive("UserHome")} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M18 9v9H2v-9H0l10-9 10 9h-2zM5 10a1 1 0 00-1 1v6h2v-6a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v6h2v-6a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v6h2v-6a1 1 0 00-1-1z"/>
                            </svg>
                            <span class="group-hover:text-gray-700">Home</span>
                        </button>
                        </li>


                        <li>
                            <button onClick={() => setActive("profile")} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                </svg>
                                <span class="group-hover:text-gray-700">My Profile</span>
                            </button>
                        </li>
                       
                        <li>
                            <button onClick={() => setActive("myplan")} class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                                    <path class="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                                </svg>
                                <span class="group-hover:text-gray-700">My Plan</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => setActive("expert")} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                                    <path class="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                                </svg>
                                Expert Guidance
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
            
             
            {/* {active === "profile" &&
                <div className="px-6 pt-6 2xl:container">
                    <DisplayProfile />
                </div>
            }
             {active === "myplan" &&
                <div className="px-6 pt-6 2xl:container">
                        <Recommendedroute />                        
                </div>
            }*/}
                 
            {active === "UserHome" &&
             <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
             <div className="text-gray-3000 font-[800] text-large rounded-lg p-2">Welcome!!</div>
             <div className="px-6 pt-6 2xl:container">
                         <ShowRoadmap />
                     </div>
             </div>
            }   
            {active === "expert" &&
                <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div className="text-gray-3000 font-[800] text-large rounded-lg p-2"></div>
                <div className="px-6 pt-6 2xl:container">
                            <ExpertGuidance />
                        </div>
                </div>
            } 
            {active === "myplan" &&
                <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div className="text-gray-3000 font-[800] text-large rounded-lg p-2"></div>
                <div className="px-6 pt-6 2xl:container">
                            <Recommendedroute />
                        </div>
                </div>
            } 
            {active === "profile" &&
                <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div className="text-gray-3000 font-[800] text-large rounded-lg p-2"></div>
                <div className="px-6 pt-6 2xl:container">
                            <DisplayProfile />
                        </div>
                </div>
            } 

            
        </div>


    )
}

export default Sidebar1