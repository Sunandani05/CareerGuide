import React, { useState, useEffect } from "react";
import {  ExpertsConnect } from "../../actions";
import { ToastContainer, toast } from "react-toastify";


const ExpertGuidance = () => {
    const [experts, setExperts] = useState([]);
    const notify = (message) => {
        toast(message);
      };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await ExpertsConnect();
          console.log(response)
          setExperts(response);
          console.log(experts)
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  
  
    return (
        
        
      <div className="pl-12">
        <ToastContainer />
      <div className="text-6xl font-bold pb-12 pt-3 text-center">Expert Advice </div>
      <div className="grid grid-cols-2 gap-4">
        {experts.map(experts => (
          <div key={experts._id} class="text-center max-w-sm rounded-lg border border-gray-200 shadow-xl">
            <div class="bg-gray-400 pl-10 rounded-md shadow-2xl rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="text-sm text-left text-black pl-10">
                <img
                  className="mx-auto rounded-t-lg "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTy_232OkNGblyO3yLyV8r1bft8RfRJLE0O9HedSub2g&usqp=CAU&ec=48600113"
                  alt="image"
                />
                <h1 className="p-1 text-xl font-bold tracking-tight text-gray-900 ">
                {experts.name}
                </h1>
                <h1 className="p-1 text-xl font-bold tracking-tight text-gray-900 ">{experts.title} </h1>
                <label><b>Designation:</b> {experts.designation}</label><br />
                <label><b>Description:</b> {experts.description}</label><br/>
              <button onClick={() => notify("Connection request sent")} className="text-xl rounded-lg text-white font-semibold bg-teal-500 p-3 m-3" type="submit">Connect</button>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
    
    );
  };
  
  export default ExpertGuidance;