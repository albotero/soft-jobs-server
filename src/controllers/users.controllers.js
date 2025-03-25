import { createUser, findUserByEmail } from "../models/users.models.js"
import { sendError } from "./errors.controllers.js"

const execute = async ({ req, res, okCode, callback, args }) => {
  try {
    const result = await callback(args)
    if (result?.status === "ok") {
      const { data } = result
      const resStatus = data ? okCode : 204
      res.status(resStatus).json(data)
    }
  } catch ({ message }) {
    sendError(req, res, 500, message)
  }
}

export const registerUser = async (req, res) => {
  await execute({
    req,
    res,
    okCode: 201,
    callback: createUser,
    args: { req, res, ...req.body },
  })
}

export const retrieveUser = async (req, res) => {
  await execute({
    req,
    res,
    okCode: 200,
    callback: findUserByEmail,
    args: req.user,
  })
}
