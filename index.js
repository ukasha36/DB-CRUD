import express from 'express'
import mongoose from './db/index.js'

mongoose.connection.on('open' , ()=>{
console.log("Moongoose Connected")
})


const app = express()

app.use(express.json())

app.listen((4000) , ()=>{
    console.log(" Server Started")
})