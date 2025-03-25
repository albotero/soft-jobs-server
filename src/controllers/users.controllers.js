import { createUser, findUserByEmail } from "../models/users.models.js"

const execute = async ({ res, okCode, callback, args }) => {
  try {
    const result = await callback(args)
    const status = result ? okCode : 204
    res.status(status).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const registerUser = async (req, res) => {
  await execute({
    res,
    okCode: 201,
    callback: createUser,
    args: req.body,
  })
}

export const retrieveUser = async (req, res) => {
  await execute({
    res,
    okCode: 200,
    callback: findUserByEmail,
    args: req.body.user,
  })
}
