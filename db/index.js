import mongoose from "mongoose";

let url ="mongodb+srv://ukasha:ukasha@cluster0.hh95ib5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 

mongoose.connect(url);

export default mongoose;