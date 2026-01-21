import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav style={{width: "100%"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 30px"}}>
                <div>
                    <h2><span style={{color: "#6bb3f2", fontSize: "40px"}}>Attack Surface</span> - HTTP Labs</h2>
                </div>
                <div style={{width: "230px", display: "flex", justifyContent: "space-between"}}>
                    <Link to="/">Home</Link>
                    <Link to="/lab-one/1">Lab One</Link>
                    <Link to="/lab-two">Lab Two</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar