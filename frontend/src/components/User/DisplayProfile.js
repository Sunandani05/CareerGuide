import React from "react";
import { useEffect, useState } from "react";




const DisplayProfile = () => {
    const [users, setUser] = useState({});
    
    useEffect(() => {
        const fetchData = () => {
          try {
            const userString = localStorage.getItem("LoggedInuser");
            const userObject = JSON.parse(userString);
            setUser(userObject);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []);
    
      return (
        <div className="pl-12">
        <div className="text-6xl font-bold pb-12 pt-3 text-center">My Profile</div>
        <div className="grid grid-cols-2 gap-4">
          <div  class="text-center max-w-sm bg-blue-300 rounded-lg border border-gray-200 shadow-xl">
              <div class="bg-gray-400 pl-10 rounded-md shadow-2xl rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="text-sm text-left text-black pl-10">
                  <img
                    className="mx-auto rounded-t-lg "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjKeGI4YUz4_Pih8w1gCZiIvaL28vv-QSoWRagw0&s"
                    alt="image"
                  />
                  <h4 className="p-5 text-2xl font-bold tracking-tight text-gray-900 ">
                    Name: {users.name}
                  </h4>
                  <h4 className="p-5 text-2xl font-bold tracking-tight text-gray-900 ">Email: {users.email}</h4>
                  <h4 className="p-5 text-2xl font-bold tracking-tight text-gray-900 ">Gender: {users.gender}</h4>
                  <h4 className="p-5 text-2xl font-bold tracking-tight text-gray-900 ">Date of Birth: {users.dob}</h4>
                  <h4 className="p-5 text-2xl font-bold tracking-tight text-gray-900 ">Mobile: {users.mobile}</h4>
                  <h4 className="p-5 text-2xl font-bold tracking-tight text-gray-900 ">Qualification: {users.qualification}</h4>
                  <h4 className="p-5 text-2xl font-bold tracking-tight text-gray-900 ">School/College: {users.school_clz}</h4>
                  <h4 className="p-5 text-2xl font-bold tracking-tight text-gray-900 ">Specialization: {users.specialization}</h4>
                </div>
              </div>
            </div>
       
        </div>
      </div>
    );
    
  };
export default DisplayProfile;