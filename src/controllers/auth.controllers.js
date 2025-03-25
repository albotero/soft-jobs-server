import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import env from "../../config/env.js"
import { log } from "../middlewares/logs.middlewares.js"
import { findUserByEmail } from "../models/users.models.js"
import { sendError } from "./errors.controllers.js"

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const {
      data: [foundUser],
    } = await findUserByEmail(email, true)
    if (!foundUser) return sendError(req, res, "user-not-found")

    const isValidPassword = bcrypt.compareSync(password, foundUser.password)
    if (!isValidPassword) return sendError(req, res, "invalid-password")

    const { JWT_SECRET: jwtSecret } = env
    const token = jwt.sign({ email }, jwtSecret, { expiresIn: "1h" })

    log(req, "> Authenticated")
    res.status(200).json({ token })
  } catch ({ message }) {
    sendError(req, res, 500, message)
  }
}
