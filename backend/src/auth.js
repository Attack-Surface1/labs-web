module.exports = (req, res, next) => {
  const userId = req.headers["x-user-id"]

  if (!userId) {
    return res.status(401).json({ error: "Not logged in" })
  }

  req.user = { id: Number(userId) }
  next()
}
