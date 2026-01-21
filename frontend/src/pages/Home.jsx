import React from 'react'
import { Link } from 'react-router-dom'

const LinkItem = (props) => {
  return <Link style={{fontSize: "50px", backgroundColor: "lightgrey", padding: "8px 12px", margin: "0 10px", borderRadius: "6px"}} to={props.to}>{props.text}</Link>
} 

const Home = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between", width: "600px", margin: "90px auto"}}>
      <LinkItem to="/lab-one/1" text="Lab 1"/>
      <LinkItem to="/lab-two" text="Lab 2"/>
    </div>
  )
}

export default Home