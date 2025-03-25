import errors from "../../config/errors.js"
import { log } from "../middlewares/logs.middlewares.js"

const findError = ([errorId]) => errors.find(({ id }) => errorId === id)
const formatData = ([status, message]) => ({ status, message })

export const sendError = (req, res, ...data) => {
  const { status, message } = findError(data) || formatData(data)
  log(req, "> ERROR", status, message)
  res.status(status).json({ message })
}

export const resourceNotFound = (req, res) => sendError("not-found", req, res)
