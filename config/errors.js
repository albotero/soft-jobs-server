const errors = [
  { id: "not-found", status: 404, message: "Resource not found" },
  { id: "user-not-found", status: 401, message: "Username or password is incorrect" },
  { id: "invalid-password", status: 401, message: "Username or password is incorrect" },
  { id: "no-token", status: 401, message: "Bearer Token must be present" },
  { id: "invalid-token", status: 401, message: "Invalid token" },
]

export default errors
