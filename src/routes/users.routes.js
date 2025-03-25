import { Router } from "express"
import { logsMiddleware } from "../middlewares/logs.middlewares.js"
import { registerUser, retrieveUser } from "../controllers/users.controllers.js"

const usersRoutes = Router()

usersRoutes.post("/usuarios", logsMiddleware, registerUser)
usersRoutes.get("/usuarios", logsMiddleware, retrieveUser)

export default usersRoutes
