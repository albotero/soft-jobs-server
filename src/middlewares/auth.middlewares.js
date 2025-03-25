import jwt from "jsonwebtoken"
import env from "../../config/env.js"
import { sendError } from "../controllers/errors.controllers.js"

const tokenRegex = /^Bearer ([a-z0-9-_=]+\.[a-z0-9-_=]+\.?[a-z0-9-_.+/=]*)$/i

export const checkToken = async (req, res, next) => {
  try {
    const auth = req.header("Authorization")
    if (!auth) return sendError(req, res, "no-token")

    const [_, token] = tokenRegex.exec(auth)
    const { JWT_SECRET: jwtSecret } = env
    const { email } = jwt.verify(token, jwtSecret)

    req.user = email
    next()
  } catch ({ message }) {
    sendError(req, res, "invalid-token")
  }
}
