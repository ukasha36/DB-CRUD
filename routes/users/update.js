
import User from "../../models/user/index.js"
import jwt from 'jsonwebtoken'

 
const updateUser = async (req , res) => {
 
try{
const {id } = req.params; 

const updateduser =  await User.findByIdAndUpdate(id , req.body)

res.status(200).send({status : 200 , message:"Updated Sucesfully "})

}
catch(error){
    console.error("Error deleting user:", error);
   
    res.status(500).send({ status: 500, message: "Internal Server Error" });
  }

}

export default updateUser