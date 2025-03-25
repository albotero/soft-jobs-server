import bcrypt from "bcryptjs"
import format from "pg-format"
import pool from "../../config/db/connection.db.js"

const executeQuery = async (...args) => {
  const query = format(...args)
  const { rows } = await pool.query(query)
  return rows
}

export const createUser = async ({ email, password, rol, lenguage }) => {
  const hashedPass = bcrypt.hashSync(password)
  const [newUser] = await executeQuery(
    `INSERT INTO usuarios
      (email, password, rol, lenguage)
    VALUES
      ('%s', '%s', '%s', '%s')
    ON CONFLICT
      DO NOTHING
    RETURNING
      id, email, rol, lenguage`,
    email,
    hashedPass,
    rol,
    lenguage
  )
  return newUser
}

export const findUserByEmail = async (email) => {
  const [user] = await executeQuery(
    `SELECT
      email, rol, lenguage
    FROM usuarios
    WHERE email = '%s'`,
    email
  )
  return user
}
