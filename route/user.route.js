import express from "express"
import { signup ,login} from "../controller/useer_controller.js"
const router=express.Router()

router.post("/signup",signup)
router.post("/login",login)

export default router