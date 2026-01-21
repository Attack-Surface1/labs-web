import React from 'react'
import { Link } from 'react-router-dom'

const LinkItem = (props) => {
  return <Link style={{fontSize: "60px", margin: "0 10px"}} to={props.to}>{props.text}</Link>
} 

const Home = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between", width: "600px", margin: "200px auto"}}>
      {/* <LinkItem to="/lab-one/1" text="Lab 1"/> */}
      <LinkItem to="/update-profile" text="Profile"/>
    </div>
  )
}

export default Home