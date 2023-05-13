import React from "react";
import { useEffect, useState } from "react";
import Adminsidebar from "./Adminslidebar";
import { AllSkills } from "../../actions";
import { DeleteUser } from "../../actions";
import "../../pages/Auth.css"

const DisplaySkills = () => {
    const [skills, setSkills] = useState([]);
  
    useEffect(() => {
      const FetchData = async () => {
        try {
          const response = await AllSkills();
          setSkills(response.data);
          console.log(skills)
        } catch (error) {
          console.log(error);
        }
      };
  
      FetchData();
    }, []);
  
    
  
    return (
      <div className="pl-12">
        <div className="text-6xl font-bold pb-12 pt-3 text-center">Top Skills</div>
        <div className="grid grid-cols-2 gap-4">
          {skills.map(skill => (
            <div key={skill._id} class="text-center max-w-sm bg-blue-300 rounded-lg border border-gray-200 shadow-xl">
              <div class="bg-gray-400 pl-10 rounded-md shadow-2xl rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="text-sm text-left text-black pl-10">
                  <img
                    className="rounded-t-lg "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmWaWVf-oTuxT4v2Kwim2qyfPpYCVnx0NKg&usqp=CAU"
                    alt="image"
                  />
                  <h4 className="p-5 text-2xl font-bold tracking-tight text-gray-900 ">
                    Title: {skill.name}
                  </h4>
                  <p>Top skills:</p>
                  {skill.skills.map(skillDetail => (
                    <div key={skillDetail._id}>
                      <p>{skillDetail.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    
  };
  
  export default DisplaySkills;