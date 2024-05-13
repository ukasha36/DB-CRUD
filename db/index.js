import mongoose from "mongoose";
import 'dotenv/config'


let url =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hh95ib5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`; 

mongoose.connect(url);

export default mongoose;