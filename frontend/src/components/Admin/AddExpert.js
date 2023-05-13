import React, { useState } from "react";
import { AddExpert } from "../../actions";
import { ToastContainer, toast } from "react-toastify";

const AddExperts = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState([""]);
  const [description, setDescription] = useState("");

  const notify = (message) => {
    toast(message);
  };


  const handleSubmit = async (event) => {
    console.log("submitted");
    event.preventDefault();
    const formData = {
      title: title,
      name: name,
      designation: designation,
      description: description
    };
    console.log(formData);
    
    try {
       const response = await AddExpert(formData);
      console.log(response);
      if (response.data._id) {
        notify("Expert Details added");
      }
    } catch (error) {
      console.log(error);
      notify("Something went wrong");
    }
    
    setName('');
    setTitle('');
    setDescription('');
    setDesignation('');
  };

  return (
    <div className="relative w-full h-[800px]">
    <div className="text-center pt-8">
      <div className="text-6xl font-bold pb-12 pt-3">Add Expert</div>
    </div>

    <div className="flex justify-center pl-12 ">
      <div className="text-center max-w-sm bg-gray-400 rounded-lg border border-gray-200 shadow-xl">
        <img
          className="rounded-t-lg "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmWaWVf-oTuxT4v2Kwim2qyfPpYCVnx0NKg&usqp=CAU"
          alt="image"
        />
        <form onSubmit={handleSubmit}>
        <h4 className="p-5 text-2xl font-bold tracking-tight text-gray-900 ">
        <label>
        Title Name:
        <input
          className="w-60"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <br />
        </h4>
        <h1>
        <div>
          <label>
            Name:<br />
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label><br />
          <label>
          Designation:<br />
            <input
              type="text"
              value={designation}
              onChange={(event) => setDesignation(event.target.value)}
            />
          </label><br />
          <label>
            Description:<br />
            <input
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
         
        </div>
      
      <br /></h1>
      <button className="text-xl rounded-lg text-white font-semibold bg-teal-500 p-3 m-3" type="submit">Add Title</button>
          </form>
          <ToastContainer />
        </div>
      </div>
      </div>
     
);
};


export default AddExperts;