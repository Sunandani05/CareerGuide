const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin')
const { authenticate } = require('../middlewares/adminauth')
const { login, addSkill, displaySkill, deleteSkill, displayExpert } = require('../controllers/adminController')
const { allUsers,  createAdmin, deleteUser,  addExpert, deleteExpert } = require('../controllers/adminController')

//post a new workout
router.post('/addadmin', createAdmin)
router.post('/login', login)
router.get('/getallusers', authenticate, allUsers)
router.delete('/deleteuser/:id',authenticate,deleteUser)


router.post('/addexpert',authenticate,addExpert)
router.get('/displayexpert',authenticate,displayExpert)
router.delete('/deleteexpert/:title',authenticate,deleteExpert)

router.post('/addskill',authenticate,addSkill)
router.get('/displayskils',authenticate,displaySkill)
router.delete('/deleteskill/:name',authenticate,deleteSkill)


module.exports = router;
