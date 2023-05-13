import React from "react";
import { useEffect, useState } from "react";
import { AllExperts } from "../../actions";
import { DeleteExpert } from "../../actions";
import { ToastContainer, toast } from "react-toastify";

const DeleteExperts = () => {
    const [experts, setExperts] = useState([]);
    const notify = (message) => {
      toast(message);
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await AllExperts();
          console.log(response)
          setExperts(response);
          console.log(experts)
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, []);
  
    const handleDelete =  async(title,id) => {
      try {
        console.log(title);
        const response = await DeleteExpert(title);
        console.log(response);
        if(response.data.message=="Expert deleted successfully"){
        notify("Expert Deleted Successfully");
        }
       setExperts(experts.filter(experts => experts._id !== id));
          
          
     } catch (error) {
       console.log(error);
       notify("Sometihng went wrong")
     }
    };
  
    return (
      <div className="pl-12">
        <ToastContainer />
      <div className="text-6xl font-bold pb-12 pt-3 text-center">Delete Experts</div>
      <div className="grid grid-cols-2 gap-4">
        { experts && experts.map(experts => (
          <div key={experts._id} class="text-center max-w-sm rounded-lg border border-gray-200 shadow-xl">
            <div class="bg-gray-400 pl-10 rounded-md shadow-2xl rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="text-sm text-left text-black pl-10">
                <img
                  className="mx-auto rounded-t-lg "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTy_232OkNGblyO3yLyV8r1bft8RfRJLE0O9HedSub2g&usqp=CAU&ec=48600113"
                  alt="image"
                />
                <h4 className="p-5 text-xl font-bold tracking-tight text-gray-900 ">
                  Title: {experts.title}
                </h4>
                <h4 className="p-5 text-xl font-bold tracking-tight text-gray-900 ">Name: {experts.name}</h4>
                <h4 className="p-5 text-xl tracking-tight text-gray-900 ">Designation: {experts.designation}</h4>
                <h4 className="p-5 text-xl tracking-tight text-gray-900 ">Description: {experts.description}</h4>
              <button className="text-xl rounded-lg text-white font-semibold bg-teal-500 p-3 m-3" type="submit" onClick={() => handleDelete(experts.title,experts._id)}>Delete</button>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
    );
  };
  
  export default DeleteExperts;