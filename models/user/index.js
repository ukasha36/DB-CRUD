 
import mongoose from "../../db/index.js";



const userSchema = new mongoose.Schema({

    username : {
        type : mongoose.Schema.Types.String ,
    },
    email:{
        type : mongoose.Schema.Types.String ,
        unique : true

    },
    password:{
        type : mongoose.Schema.Types.String 

    }
} , {
    timestamps : {
        createdAt : 'created_at' ,
        updatedAt : 'updated_at'
    }
})

const User = mongoose.model('user', userSchema)

export default User ;