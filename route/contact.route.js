import express from "express"
import { getdata } from "../controller/contact_controller.js"
const router=express.Router()

router.post("/message",getdata)
export default router