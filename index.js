
import express from "express"
import dotevn from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
const app=express()
import bookrouter from "./route/book_routes.js"
import Userroute from "./route/user.route.js"
import Contactroute from "./route/contact.route.js"
import path from "path"
import { fileURLToPath } from 'url';
dotevn.config()

const PORT=process.env.PORT || 4000
const URI=process.env.MonogoDBURI

app.use(cors())
app.use(express.json())

try{
    mongoose.connect(URI,{
        
    })
    console.log("connected")
}

catch(err){
    console.log(err)
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/book",bookrouter)
app.use("/user",Userroute)
app.use("/usermessage",Contactroute)

const frontendPath = path.resolve(__dirname, "frontend", "dist");
app.use(express.static(frontendPath));

// Handle root request
app.get("/", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

// Handle all other requests
app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(PORT,()=>{
    console.log(`Port is ${PORT}`)
})