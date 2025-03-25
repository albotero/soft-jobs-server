import express from "express"
import cors from "cors"
import env from "./config/env.js"
import usersRoutes from "./src/routes/users.routes.js"
import { resourceNotFound } from "./src/controllers/errors.controllers.js"

const { SERVER_PORT, SERVER_URL, CLIENT_URL } = env
const whiteList = [SERVER_URL, CLIENT_URL]
const corsOptions = {
  credentials: true,
  origin: (origin, callback) =>
    !origin || whiteList.includes(origin) ? callback(null, true) : callback(new Error(`CORS Error: ${origin}`), false),
}

const app = express()
app.use(cors(corsOptions))
app.use(express.json())

app.use("/", usersRoutes)
app.use("*", resourceNotFound)

app.listen(SERVER_PORT, () => {
  console.log("Server is UP!")
  console.log("Listening to Port", SERVER_PORT)
})
