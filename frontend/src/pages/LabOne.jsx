import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function LabOne() {
  const [profile, setProfile] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    fetch(`http://10.0.0.5:3000/user/${id}`)
      .then(res => res.json())
      .then(data => setProfile(data))
  }, [id])

  if (!profile) return <p>Loading...</p>

  return (
    <div>

      <div style={{ width: "70%", margin: "60px auto" }}>
        <h1>Welcome to your profile <span style={{ color: "yellowgreen" }}>{profile?.username}</span></h1>
        {profile && (
          <div style={{ marginTop: "2rem", border: "1px solid lightblue", width: "100%", padding: "20px", borderRadius: "10px", fontSize: "22px" }}>
            <p><strong>Email:</strong> {profile.email}</p>
            <hr />
            <p><strong>Role:</strong> {profile.role}</p>
            <hr />
            <p><strong>Bio:</strong> {profile.bio}</p>
            <hr />
            <h4>Posts</h4>
            <ul>
              {profile.posts.map(post => (
                <li key={post.id}>
                  <strong>{post.title}</strong>: {post.content}
                </li>
              ))}
            </ul>
            <hr />
            <h4>Settings</h4>
            <ul>
              <li>Theme: {profile.settings.theme}</li>
              <li>Email notifications: {profile.settings.emailNotifications ? "On" : "Off"}</li>
            </ul>
            {profile.secrets && (
              <>
                <h4 style={{ color: "red" }}>🚨 Admin Secrets 🚨</h4>
                <pre>{JSON.stringify(profile.secrets, null, 2)}</pre>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default LabOne
