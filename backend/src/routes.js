const express = require("express")
const router = express.Router()

const users = require("./data")
const auth = require("./auth")

router.get("/user/:id", auth, (req, res) => {
  const user = users.find(u => u.id == req.params.id)

  if (!user) {
    return res.status(404).json({ error: "User not found" })
  }

  // 🚨 VULNERABILITY: no ownership check
  res.json(user)
})

module.exports = router
