const { createAdmin, login, deleteUser } = require('../controllers/adminController');
const adminModel = require('../models/Admin');
const { allUsers } = require('../controllers/adminController');
const userModel = require('../models/User');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'my-secret-key';
const bcrypt = require('bcrypt');

describe('createAdmin', () => {
  it('should create an admin', async () => {
    const req = {
      body: {
        name: 'John',
        email: 'john@example.com',
        password: 'password'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const expectedAdmin = {
      _id: 'someid',
      name: 'John',
      email: 'john@example.com',
      password: 'password'
    };
    adminModel.create = jest.fn().mockResolvedValue(expectedAdmin);

    await createAdmin(req, res);

    expect(adminModel.create).toHaveBeenCalledWith({ name: 'John', email: 'john@example.com', password: 'password' });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expectedAdmin);
  });

  it('should return an error message when there is a server error', async () => {
    const req = {
      body: {
        name: 'John',
        email: 'john@example.com',
        password: 'password'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    adminModel.create = jest.fn().mockRejectedValue(new Error('Server error'));

    await createAdmin(req, res);

    expect(adminModel.create).toHaveBeenCalledWith({ name: 'John', email: 'john@example.com', password: 'password' });
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
  });
});

describe('login', () => {
    it('should return 200 status with token when valid credentials are provided', async () => {
      const req = {
        body: {
          email: 'testadmin@example.com',
          password: 'testpassword',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const foundAdmin = {
        _id: 'someadminid',
        email: 'testadmin@example.com',
        password: '$2b$10$/iG40yFT4ijI4.C9s5C47Ow6cb3hBU8m6FBKhYQe6X3Ita.JZ6g5O', // hashed password for "testpassword"
      };
      adminModel.findOne = jest.fn().mockResolvedValue(foundAdmin);
      bcrypt.compare = jest.fn().mockResolvedValue(true);
      jwt.sign = jest.fn().mockReturnValue('sometoken');
  
      await login(req, res);
  
      expect(adminModel.findOne).toHaveBeenCalledWith({ email: 'testadmin@example.com' });
      expect(bcrypt.compare).toHaveBeenCalledWith('testpassword', foundAdmin.password);
      expect(jwt.sign).toHaveBeenCalledWith({ adminId: 'someadminid' }, JWT_SECRET, { expiresIn: '1h' });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Logged in successfully', token: 'sometoken' });
    });
  });  


describe('allUsers', () => {
    it('should return all users when token is valid', async () => {
      // Mock request with a valid token in the header
      const token = jwt.sign({ id: 'someuserid' }, JWT_SECRET);
      const req = {
        headers: {
          'x-access-token': token
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const expectedUsers = [
        {
            "_id": "",
            "name": "",
            "email": "",
            "mobile": "",
            "gender": "",
            "dob": "",
            "qualification": "",
            "school_clz": "",
            "specialization": "",
            "password": "",
            "confirmpassword": "",
            "createdAt": "",
            "updatedAt": "",
            "__v": 0
        },
    ];
      userModel.find = jest.fn().mockResolvedValue(expectedUsers);
  
      await allUsers(req, res);
  
      expect(userModel.find).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(expectedUsers);
    });
  
        
    it('should return 500 when there is a server error', async () => {
      // Mock request with a valid token in the header
      const token = jwt.sign({ id: 'someuserid' }, JWT_SECRET);
      const req = {
        headers: {
          'x-access-token': token
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      userModel.find = jest.fn().mockRejectedValue(new Error('Server error'));
  
      await allUsers(req, res);
  
      expect(userModel.find).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
    });
  });

  describe('deleteUser', () => {
    it('should delete user and return 200 status when given a valid user id', async () => {
      // Mock the request object with a valid user id
      const token = jwt.sign({ id: 'someuserid' }, JWT_SECRET);
      const req = {
        headers: {
            'x-access-token': token
          },
        params: {
          id: 'validuserid'
        }
      };

  
      // Mock the response object
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
  
      // Mock the user model's findByIdAndDelete method to return a deleted user
      const deletedUser = {
        _id: 'validuserid',
        name: 'John Doe',
        email: 'johndoe@example.com',
        mobile: '1234567890',
        gender: 'male',
        dob: '1990-01-01',
        qualification: 'B.Tech',
        school_clz: 'St. Xavier\'s School',
        specialization: 'Computer Science',
        password: 'hashedPassword',
        confirmpassword: 'hashedPassword',
        createdAt: '2022-05-10T06:54:36.901Z',
        updatedAt: '2022-05-10T06:54:36.901Z',
        __v: 0
      };
      userModel.findByIdAndDelete = jest.fn().mockResolvedValue(deletedUser);
  
      // Call the deleteUser function with the mocked request and response objects
      await deleteUser(req, res);
  
      // Expectations
      expect(userModel.findByIdAndDelete).toHaveBeenCalledWith('validuserid');
      //expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'User deleted successfully' });
    });
  
    it('should return 404 status when given an invalid user id', async () => {
      // Mock the request object with an invalid user id
      const req = {
        params: {
          id: 'invaliduserid'
        }
      };
  
      // Mock the response object
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
  
      // Mock the user model's findByIdAndDelete method to return null
      userModel.findByIdAndDelete = jest.fn().mockResolvedValue(null);
  
      // Call the deleteUser function with the mocked request and response objects
      await deleteUser(req, res);
  
      // Expectations
      expect(userModel.findByIdAndDelete).toHaveBeenCalledWith('invaliduserid');
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
    });
  
    it('should return 500 status when there is a server error', async () => {
      // Mock the request object with a valid user id
      const req = {
        params: {
          id: 'validuserid'
        }
      };
  
      // Mock the response object
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
  
      // Mock the user model's findByIdAndDelete method to throw an error
      userModel.findByIdAndDelete = jest.fn().mockRejectedValue(new Error('Server error'));
  
      // Call the deleteUser function with the mocked request and response objects
      await deleteUser(req, res);
  
      // Expectations
      expect(userModel.findByIdAndDelete).toHaveBeenCalledWith('validuserid');
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
    });
  });
  


