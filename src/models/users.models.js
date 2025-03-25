import bcrypt from "bcryptjs"
import format from "pg-format"
import pool from "../../config/db/connection.db.js"
import { sendError } from "../controllers/errors.controllers.js"

const executeQuery = async (...args) => {
  const query = format(...args)
  const { rows } = await pool.query(query)
  return rows
}

export const createUser = async ({ req, res, email, password, rol, lenguage }) => {
  try {
    const hashedPass = bcrypt.hashSync(password)
    const [newUser] = await executeQuery(
      `INSERT INTO usuarios
        (email, password, rol, lenguage)
      VALUES
        ('%s', '%s', '%s', '%s')
      RETURNING
        id, email, rol, lenguage`,
      email,
      hashedPass,
      rol,
      lenguage
    )
    return { status: "ok", data: newUser }
  } catch (error) {
    if (error.code == 23505) sendError(req, res, "user-already-exists")
    else throw error
  }
}

export const findUserByEmail = async (email, returnPassword) => {
  const columns = returnPassword ? "*" : "email, rol, lenguage"
  const user = await executeQuery(
    `SELECT
      ${columns}
    FROM usuarios
    WHERE email = '%s'`,
    email
  )
  return { status: "ok", data: user }
}
