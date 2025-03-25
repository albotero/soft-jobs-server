import { sendError } from "../controllers/errors.controllers.js"
import { userSchema } from "./schemas/users.schemas.js"

export const checkUserData = (req, res, next) => {
  const { error } = userSchema.validate(req.body)

  if (error) {
    const [{ message }] = error.details
    return sendError(req, res, 422, message)
  }

  next()
}
