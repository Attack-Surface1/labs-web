const express = require("express")
const cors = require("cors")
const routes = require("./routes")
const users = require("./data")
const flagData = require("./flag-data")

const app = express()

app.use(cors())
app.disable("etag")
app.use(express.json())
app.use("/api", routes)

app.get("/", (req, res) => {
  res.send("IDOR Lab API is running")
})

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const user = users.find(u => u.id === id)

  if (!user) {
    return res.status(404).json({ error: "User not found" })
  }

  res.json(user)
})

app.get("/flag/:token", (req, res) => {
  try {
    const decoded = Buffer.from(req.params.token, "base64").toString("utf8")

    // expected format: user:<id>
    const [, id] = decoded.split(":")
    const userId = parseInt(id)

    const user = flagData.find(u => u.id === userId)
    
    if (!user) {
      return res.status(404).json({ error: "flag not found" })
    }

    res.json(user)

  } catch (err) {
    res.status(400).json({ error: "Invalid token" })
  }
})

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000")
})
