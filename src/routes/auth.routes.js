import { Router } from "express"
import { loginUser } from "../controllers/auth.controllers.js"

const authRoutes = Router()

authRoutes.post("/login", loginUser)

export default authRoutes
