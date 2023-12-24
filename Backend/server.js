const express =  require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');


// Adding a setup roter by using App  express
const app = express();

// Setting a json router...
app.use(express.json());


// Adding a main error handler
app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Dear user you get an Internal server error...";
    return res.status(statusCode).json({
        sucess: false,
        statusCode,
        message,
    })
})

// Middleware to agree with cors 
app.use(
    cors({
        origin : 'http://localhost:5173',
        credentials : true,
    })
)

// MongoDb connection to parameter
const urlMongodb  = process.env.DB_MONGO_URLS_PATH
mongoose
.connect(urlMongodb, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
    app.listen(4000, () =>{
        console.log('Congratulation ! Now you are runnig  live in MongoDB at port', 4000)
    })
})
.catch((err) =>{
    console.log("Mongo has errors " , err)
    process.exit(1)
})