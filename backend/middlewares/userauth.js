const jwt = require("jsonwebtoken");

const JWT_SECRET = 'my-secret-key';

const authenticate = (req, res, next) => {
  try{
    const token =  req.headers["x-access-token"];
    if(!token){
      res.status(400).send('Token Not Found')
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    console.log(req.userId)
    next();
  }
  catch(err)
  {
    console.log(err);
    return res.status(400).send('Authentication Error')
  }

 
    
   
};

module.exports = { authenticate };