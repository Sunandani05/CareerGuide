require('dotenv').config()
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')
const winston = require('winston');
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()

//middleware
app.use(express.json());
const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
  

  const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/access.log' })
  ]
});
app.use((req, res, next) => {
    logger.info(`${req.method},${req.path} - ${req.ip}`);
    console.log(req.path, req.method);
    next();
})
app.use(cors());
app.use(cors({
    origin: ['http://localhost:3001/', 'http://localhost:3000/']
  }));

//routes



app.use('/admin', adminRoutes)
app.use('/user', userRoutes)


//mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://test:test@cluster0.l69p7lc.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: false,  useUnifiedTopology: false })
    .then(() => {

      console.log( 'Database Connected' );
        //listen on port 4000
        //app.listen(process.env.PORT, () => {
            //console.log('connected to db and listening on port 4000')
    })
    .catch((error) => {
        console.log(error)
    })

  