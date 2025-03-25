import { Router } from "express"
import { logRequest } from "../middlewares/logs.middlewares.js"
import { checkToken } from "../middlewares/auth.middlewares.js"
import { checkUserData } from "../middlewares/users.middlewares.js"
import { registerUser, retrieveUser } from "../controllers/users.controllers.js"

const usersRoutes = Router()

usersRoutes.post("/usuarios", checkUserData, logRequest, registerUser)
usersRoutes.get("/usuarios", checkToken, logRequest, retrieveUser)

export default usersRoutes
