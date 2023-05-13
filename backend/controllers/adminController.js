const admin = require('../models/Admin')
const user = require('../models/User')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'my-secret-key';
const expert = require('../models/expert')
const skill = require('../models/Skill')



//create
const createAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const Admin = await admin.create({ name, email, password });
    res.status(201).json(Admin);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

//admin login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundAdmin = await admin.findOne({ email });
    if (!foundAdmin) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password in the database
    const match = await bcrypt.compare(password, foundAdmin.password);

    // If the passwords don't match, send an error message
    if (!match) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate a JWT token and send it in the response
    const token = jwt.sign({ adminId: foundAdmin._id }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Logged in successfully', token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


//getallusers
const allUsers = async (req, res) => {
  try {
    const users = await user.find();
    //return res.json(users);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

//deleteuser
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try{
    const deletedUser = await user.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json({ message: 'User deleted successfully' });
  }
  catch(error){
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
}



//addExperttable
const addExpert = async (req, res) => {
  const { image, title, name, designation, description } = req.body;

  try {
    const Expert = await expert.create({ image, title, name, designation, description });
    res.status(201).json(Expert);
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

//deleteExpert
const deleteExpert = async (req, res) => {
  const { title } = req.params;
  try{
    const deletedExpert = await expert.findOneAndDelete({title});
    if (!deletedExpert) {
      return res.status(404).json({ message: 'Expert not found' });
    }
    return res.json({ message: 'Expert deleted successfully' });
  }
  catch(error){
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
}

//create skill table
const addSkill = async (req, res) => {
  const { name, skills } = req.body;
  try {
    const skil = new skill({ name, skills });
    await skil.save();
    res.status(201).json({ message: 'skills added successfully', skil });
  } catch (err) {
    res.status(400).json({ error: err.message });
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

//deleteSkill
const deleteSkill = async (req, res) => {
  const { name } = req.params;
  try{
    const deletedskil = await skill.findOneAndDelete({name});
    if (!deletedskil) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    return res.json({ message: 'Skills deleted successfully' });
  }
  catch(error){
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
}




module.exports = {
    createAdmin, login, 
    allUsers, deleteUser, 
    addExpert, deleteExpert, displayExpert,
    addSkill, displaySkill, deleteSkill
}