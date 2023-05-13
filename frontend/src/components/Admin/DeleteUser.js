import React from "react";
import { useEffect, useState } from "react";
import { AllUsers } from "../../actions";
import { DeleteUser } from "../../actions";
import { ToastContainer, toast } from "react-toastify";

const DeleteUsers = () => {
    const [users, setUsers] = useState([]);
    const notify = (message) => {
      toast(message);
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await AllUsers();
          setUsers(response);
          console.log(response);
          console.log(users)
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleDelete =  async(userId) => {
      try {
        console.log(userId);
        const response = await DeleteUser(userId);
        console.log(response);
        if(response.data.message === "User deleted successfully")
        {
          notify("User Deleted Successfully");
        }
        setUsers(users.filter(user => user._id !== userId));
          
          
     } catch (error) {
       console.log(error);
       notify("Something went wrong");
     }
    };
  
    return (
      <div className="pl-12">
         <ToastContainer />
      <div className="text-6xl font-bold pb-12 pt-3 text-center">Delete Users</div>
      <div className="grid grid-cols-2 gap-4">
        {users.map(user => (
          <div key={user._id} class="text-center max-w-sm bg-blue-300 rounded-lg border border-gray-200 shadow-xl">
            <div class="bg-gray-400 pl-10 rounded-md shadow-2xl rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="text-sm text-left text-black pl-10">
                <img
                  className="mx-auto rounded-t-lg "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjKeGI4YUz4_Pih8w1gCZiIvaL28vv-QSoWRagw0&s"
                  alt="image"
                />
                <label>
                  Name: {user.name}
                  </label><br />
                <label>Email: {user.email}</label><br />
                <label>Gender: {user.gender}</label><br />
                <label>Date of Birth: {user.dob}</label><br />
                <label>Mobile: {user.mobile}</label><br />
                <label>Qualification: {user.qualification}</label><br />
                <label>School/College: {user.school_clz}</label><br />
                <label>Specialization: {user.specialization}</label><br />
              </div>
            </div>
            <button className="text-xl rounded-lg text-white font-semibold bg-teal-500 p-3 m-3" type="submit" onClick={() => handleDelete(user._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
  
};
  
  export default DeleteUsers;