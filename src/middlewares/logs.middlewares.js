export const log = (req, ...details) => {
  const { method, originalUrl } = req
  const datetime = new Date()
  console.log(datetime, method, originalUrl, ...details)
}

export const logsMiddleware = (req, _, next) => {
  log(req)
  next()
}
