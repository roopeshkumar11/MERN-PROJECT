import mongoose from "mongoose";

const ConatactSchema=mongoose.Schema({
    fullname:String,
    email:String,
    message:String
})

const Contact=mongoose.model("Contact",ConatactSchema)
export default Contact
