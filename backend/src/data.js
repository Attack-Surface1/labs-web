const users = [
  {
    id: 1,
    username: "alice",
    email: "alice@attack.local",
    role: "user",
    bio: "Frontend dev & coffee addict",
    posts: [
      { id: 1, title: "My first post", content: "Hello world!" },
      { id: 2, title: "React tips", content: "Use keys properly!" }
    ],
    settings: {
      theme: "dark",
      emailNotifications: true
    }
  },
  {
    id: 2,
    username: "bob",
    email: "bob@attack.local",
    role: "user",
    bio: "Backend enjoyer",
    posts: [
      { id: 3, title: "Node.js rocks", content: "Express is minimal and clean." }
    ],
    settings: {
      theme: "light",
      emailNotifications: false
    }
  },
  {
    id: 3,
    username: "charlie",
    email: "charlie@attack.local",
    role: "user",
    bio: "Security student",
    posts: [
      { id: 4, title: "Learning Burp", content: "IDOR is scary." }
    ],
    settings: {
      theme: "dark",
      emailNotifications: true
    }
  },
  {
    id: 99,
    username: "admin",
    email: "admin@attack.local",
    role: "admin",
    bio: "System administrator",
    posts: [
      { id: 999, title: "Internal notes", content: "Do not share externally." }
    ],
    secrets: {
      apiKey: "sk_live_123456",
      flag: "flag{idor_owned}",
      internalNotes: "Flag is hidden somewhere here: :3000/flag/dXNlcjoxCg"
    },
    settings: {
      theme: "dark",
      emailNotifications: false
    }
  }
]

module.exports = users
