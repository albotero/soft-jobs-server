import errors from "../../config/errors.js"
import { log } from "../middlewares/logs.middlewares.js"

const sendError = (errorId, req, res) => {
  const { status, message } = errors.find(({ id }) => errorId === id)
  log(req, "> ERROR", status, message)
  res.status(status).json({ error: message })
}

export const resourceNotFound = (req, res) => sendError("not-found", req, res)
