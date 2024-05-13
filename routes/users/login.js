import User from "../../models/user/index.js"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'


const loginUser = async (req , res ) => {

    try {

        const { email , password} = req.body
        const user = await User.findOne({ email})

        if (user) {
            var token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
            const check = bcrypt.compareSync(password, user.password);  
            //(password form request , password from DB)
            if(check){
                res.status(201).send({status:201 , user ,  message:"login sucessfull" , token})
            }
            else{
                res.status(401).send({status:401 , message:"password is incorrect"})
            }


        } else {
            res.status(400).json({message: "User not found"})
            
        }

      

    } catch (err) {
        console.log(err)
    }  


 
}

export default loginUser;