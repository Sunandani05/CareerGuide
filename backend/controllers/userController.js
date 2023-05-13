const user = require('../models/User')
const expert = require('../models/expert');
const mongoose = require('mongoose');
const skill = require('../models/Skill');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Skill = require('../models/Skill');
const JWT_SECRET = 'my-secret-key';


//create
const createUser = async (req, res) => {
    const { name, email, mobile, gender, dob, qualification, school_clz, specialization, password, confirmpassword } = req.body;
    try {
      const exist=await user.findOne({email});
      if(exist)
      {
        return res.status(400).send('user Already Registered')
      }
      if(password != confirmpassword)
      {
        return res.status(403).send('Password Invalid')
      }
      const User = await user.create({ name, email, mobile, gender, dob, qualification, school_clz, specialization, password, confirmpassword });
      res.status(201).json(User);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };


//userlogin
  const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const foundUser = await user.findOne({ email });
      if (!foundUser) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
      // Compare the provided password with the hashed password in the database
      const match = await bcrypt.compare(password, foundUser.password);
  
      if (!match) {
        return res.status(401).json({ error: 'Invalid  password' });
      }
  
      // Generate a JWT token and send it in the response
      const token = jwt.sign({ userId: foundUser._id }, JWT_SECRET, {
        expiresIn: '1h',
      });
  
      res.status(200).json({ message: 'User Logged in successfully', token , foundUser});
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
//getbyid
const userbyId = async (req, res) => {
    try {
      const users = await user.findById(req.userId);
      if (!users) {
        return res.status(404).json({ mssg: 'No Such User' })
    }
      return res.json(users);
    }catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };


//update
//updateuserbyid
const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
      const updatedUser = await user.findByIdAndUpdate(
        id,
        { name, email },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      return res.json(updatedUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

//getallusers
const displaySkill = async (req, res) => {
  try {
    const skil = await skill.find();
    return res.json(skil);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

//getallexperts
const displayExpert = async (req, res) => {
  try {
    const disexperts = await expert.find();
    return res.json(disexperts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};


  
//getcoursebyname
// const findUserWithMostSkills = async (req, res) => {
//   const { skills } = req.body;
//   try {
//     const users = await Skill.find();
//     let maxMatchedSkillsCount = 0;
//     let userWithMostMatchedSkills = null;

//     for (const skil of users) {
//       let matchedSkillsCount = 0;
//       for (const skils of Skill.skills) {
//         if (skills.includes(skil)) {
//           matchedSkillsCount++;
//         }
//       }
//       if (matchedSkillsCount > maxMatchedSkillsCount) {
//         maxMatchedSkillsCount = matchedSkillsCount;
//         userWithMostMatchedSkills = skil;
//       }
//     }

//     if (!userWithMostMatchedSkills) {
//       return res.status(404).json({ message: 'No user found with matching skills' });
//     }

//     return res.json(userWithMostMatchedSkills);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

  
module.exports = {
    createUser, login, userbyId, updateUserById, displaySkill, displayExpert
}