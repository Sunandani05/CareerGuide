const { createAdmin, login, deleteUser } = require('../controllers/adminController');
const { createUser, displaySkill } = require('../controllers/userController');
const adminModel = require('../models/Admin');
const { allUsers } = require('../controllers/adminController');
const skilld = require('../models/Skill');
const userModel = require('../models/User');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'my-secret-key';
const bcrypt = require('bcrypt');

describe('createUser', () => {
    it('should create a user', async () => {
      const req = {
        body: {
          name: 'John',
          email: 'john@example.com',
          mobile: '1234567890',
          gender: 'male',
          dob: '1990-01-01',
          qualification: 'Bachelor of Science',
          school_clz: 'ABC School',
          specialization: 'Computer Science',
          password: 'password',
          confirmpassword: 'password'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const expectedUser = {
        _id: 'someid',
        name: 'John',
        email: 'john@example.com',
        mobile: '1234567890',
        gender: 'male',
        dob: '1990-01-01',
        qualification: 'Bachelor of Science',
        school_clz: 'ABC School',
        specialization: 'Computer Science'
      };
      userModel.findOne = jest.fn().mockResolvedValue(null);
      userModel.create = jest.fn().mockResolvedValue(expectedUser);
  
      await createUser(req, res);
  
      expect(userModel.findOne).toHaveBeenCalledWith({ email: 'john@example.com' });
      expect(userModel.create).toHaveBeenCalledWith({ 
        name: 'John',
        email: 'john@example.com',
        mobile: '1234567890',
        gender: 'male',
        dob: '1990-01-01',
        qualification: 'Bachelor of Science',
        school_clz: 'ABC School',
        specialization: 'Computer Science',
        password: 'password',
        confirmpassword: 'password'
      });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(expectedUser);
    });
  
    it('should return an error message when user is already registered', async () => {
      const req = {
        body: {
          name: 'John',
          email: 'john@example.com',
          mobile: '1234567890',
          gender: 'male',
          dob: '1990-01-01',
          qualification: 'Bachelor of Science',
          school_clz: 'ABC School',
          specialization: 'Computer Science',
          password: 'password',
          confirmpassword: 'password'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };
      userModel.findOne = jest.fn().mockResolvedValue({ email: 'john@example.com' });
  
      await createUser(req, res);
  
      expect(userModel.findOne).toHaveBeenCalledWith({ email: 'john@example.com' });
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith('user Already Registered');
    });
  
    describe('displaySkill', () => {
       
        it('should return all skills', async () => {
            const token = jwt.sign({ id: 'someuserid' }, JWT_SECRET);
            const req = {
              headers: {
                  'x-access-token': token
                },
              params: {
                id: 'validuserid'
              }
            };
          const res = {
            json: jest.fn(),
          };
          const mockSkills = [
            {
                "_id": "",
                "name": "",
                "skills": [
                    {
                        "name": "",
                        "_id": ""
                    },
                    {
                        "name": "",
                        "_id": ""
                    },
                    {
                        "name": "",
                        "_id": ""
                    },
                    {
                        "name": "",
                        "_id": ""
                    }
                ],
                "createdAt": "",
                "updatedAt": "",
                "__v": 0
            }];
          skilld.find = jest.fn().mockResolvedValue(mockSkills);
      
          await displaySkill(req, res);
      
          expect(skilld.find).toHaveBeenCalled();
          expect(res.json).toHaveBeenCalledWith(mockSkills);
        });
      
        it('should return an error message when there is a server error', async () => {
            const token = jwt.sign({ id: 'someuserid' }, JWT_SECRET);
          const req = {
            headers: {
                'x-access-token': token
              },
            params: {
              id: 'validuserid'
            }
          };
          const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
          };
          skilld.find = jest.fn().mockRejectedValue(new Error('Server error'));
      
          await displaySkill(req, res);
      
          expect(skilld.find).toHaveBeenCalled();
          expect(res.status).toHaveBeenCalledWith(500);
          expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
        });
      });
      
  
})
  