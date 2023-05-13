import axios from "axios";
export const AdminLoginval = async(data)  => {
    try {
        console.log("action")
      
      const res = await axios.post("http://localhost:5000/admin/login", data);
      console.log(res.data);
      return res;
    } catch (error) {
     console.log(error)
    }
  };

  export const SignUpval = async(data)  => {
    try {
        console.log("action Signup")
      
      const res = await axios.post("http://localhost:5000/user/adduser", data);
      console.log(res.data);
      console.log(res.status);
      return res;
    } catch (error) {
     console.log(error)
    }
  };

  export const Loginval = async(data)  => {
    try {
        console.log("action login")
      
      const res = await axios.post("http://localhost:5000/user/userlogin", data);
      console.log(res);
      console.log(res);
      return res;
    } catch (error) {
     console.log(error)
    }
  };

  export const AllUsers = async () => {
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.get("http://localhost:5000/admin/getallusers", {
        headers: {
          'x-access-token': token
        }
      });
  
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  //deleteUser
  export const DeleteUser = async (id) => {
    const token = localStorage.getItem('token');
   try {
      const response = await axios.delete(`http://localhost:5000/admin//deleteuser/${id}`, {
        headers: {
          'x-access-token': token
        }
      });
  
      return response;
    } catch (error) {
      console.error(error);
    }
  };


  export const AllSkills = async () => {
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.get("http://localhost:5000/admin/displayskils", {
        headers: {
          'x-access-token': token
        }
      });
  
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  export const AddSkill = async(data)  => {
    
    const token = localStorage.getItem('token');
  
    try {
      const res = await axios.post("http://localhost:5000/admin/addskill", data, {
        headers: {
          'x-access-token': token
        }
      });
  
      console.log(res.data);
      console.log(res.status);
      return res;
    } catch (error) {
     console.log(error)
    }
  };

  //deleteSkill
  export const DeleteSkill = async (name) => {
    const token = localStorage.getItem('token');
   try {
      const response = await axios.delete(`http://localhost:5000/admin//deleteskill/${name}`, {
        headers: {
          'x-access-token': token
        }
      });
  
      return response;
    } catch (error) {
      console.error(error);
    }
  };


  //addExpert
  export const AddExpert = async(data)  => {
    
    const token = localStorage.getItem('token');
  
    try {
      const res = await axios.post("http://localhost:5000/admin/addexpert", data, {
        headers: {
          'x-access-token': token
        }
      });
  
      console.log(res.data);
      console.log(res.status);
      return res;
    } catch (error) {
     console.log(error)
    }
  };

  //deleteExpert
  export const DeleteExpert = async (title) => {
    const token = localStorage.getItem('token');
   try {
      const response = await axios.delete(`http://localhost:5000/admin/deleteexpert/${title}`, {
        headers: {
          'x-access-token': token
        }
      });
  
      return response;
    } catch (error) {
      console.error(error);
    }
  };

//display Experts
export const AllExperts = async () => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get("http://localhost:5000/admin/displayexpert", {
      headers: {
        'x-access-token': token
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const ExpertsConnect = async () => {
  const token = localStorage.getItem('user_token');

  try {
    const response = await axios.get("http://localhost:5000/user/expertconnect", {
      headers: {
        'x-access-token': token
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};


