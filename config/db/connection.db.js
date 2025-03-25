import pg from "pg"
import env from "../env.js"

const { DB_HOST: host, DB_USER: user, DB_PASSWORD: password, DB_NAME: database } = env

const pool = new pg.Pool({ host, user, password, database, allowExitOnIdle: true })

export default pool
