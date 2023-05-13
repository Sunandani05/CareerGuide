import React, { useState } from "react";
import { AddSkill } from "../../actions";
import { ToastContainer, toast } from "react-toastify";

const AddSkills = () => {
  const [skillName, setSkillName] = useState("");
  const [subSkills, setSubSkills] = useState([""]);

  const notify = (message) => {
    toast(message);
  };

  const handleSubSkillChange = ( index,event) => {
    const newSubSkills = [...subSkills];
    newSubSkills[index] = event.target.value;
    setSubSkills(newSubSkills);
    console.log(subSkills);
  };

  const handleAddSubSkill = () => {
    setSubSkills([...subSkills, ""]);
    console.log(subSkills)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const subSkillObjects = subSkills.map(skillName => ({ name: skillName }));
    const newSkill = {
      name: skillName,
      skills: subSkillObjects,
    };
    
    try {
      const response = await AddSkill(newSkill);
      console.log(response);
      if (response.data.message === "skills added successfully") {
        notify("Skills added");
      }
    } catch (error) {
      console.log(error);
      notify("Something went wrong");
    }
    
    setSkillName('');
    setSubSkills([""]);
  };

  return (
    <div className="relative w-full h-[800px]">
      <ToastContainer />
      <div className="text-center pt-8">
        <div className="text-6xl font-bold pb-12 pt-3">Add Skill</div>
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
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
          />
        </label>
        <br />
          </h4>
          <h1>{subSkills.map((subSkill, index) => (
          <div key={index}>
            <label>
              Skill #{index + 1}:
              <input
                type="text"
                value={subSkill}
                onChange={(event) => handleSubSkillChange(index,event)}
              />
            </label>
            {index === subSkills.length - 1 && (
              <button type="button" onClick={() => handleAddSubSkill()}>
                Add Skill
              </button>
            )}
          </div>
        ))}
        <br /></h1>
        <button className="text-xl rounded-lg text-white font-semibold bg-teal-500 p-3 m-3" type="submit">Add Title</button>
            </form>
          </div>
        </div>
        </div>
       
  );
};

export default AddSkills;