import React, { useState } from 'react'

const UpdateProfile = () => {
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");

    const submit = async () => {
        const res = await fetch(`http://localhost:3000/api/profile/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-User-Id": userId
            },
            body: JSON.stringify({ role })
        });
        const data = await res.json();
        setMsg(JSON.stringify(data));
    };

    return (
        <div>
            <h2>Update Profile</h2>
            <input value={role} onChange={e => setRole(e.target.value)} placeholder="Role" />
            <button onClick={submit}>Submit</button>
            {msg && <pre>{msg}</pre>}
        </div>
    );
}

export default UpdateProfile
