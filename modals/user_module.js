import mongoose from "mongoose";

const Userschemma=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const User =mongoose.model("User",Userschemma)

export default User