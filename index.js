import express from 'express';

import mongoose from './db/index.js'
import postuser from './routes/users/post.js'

import routes from './routes/index.js';
mongoose.connection.on('open' , ()=>{
console.log(" Databse  Connected")
})


const app = express()

app.use(express.json())

const router = express.Router();


app.listen((4000) , ()=>{
    console.log(" Server Started running on 4000")
})

app.use("/", (req, res, next) => {
    // console.log("Middle ware")
  
    console.log("Reuest ---> ", req.originalUrl);
    next();
    //
  });
  
  app.use("/api", routes);

