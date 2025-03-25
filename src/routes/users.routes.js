import { Router } from "express"
import { logRequest } from "../middlewares/logs.middlewares.js"
import { checkToken } from "../middlewares/auth.middlewares.js"
import { registerUser, retrieveUser } from "../controllers/users.controllers.js"

const usersRoutes = Router()

usersRoutes.post("/usuarios", logRequest, registerUser)
usersRoutes.get("/usuarios", logRequest, checkToken, retrieveUser)

export default usersRoutes
