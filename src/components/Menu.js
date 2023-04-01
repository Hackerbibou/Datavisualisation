import React from 'react'
import { Link } from "react-router-dom";
import "./Components.scss"

export default function Menu() {
  return (
    <div className='Menu'>
  
      <div className="flexbox-Menu">
        <Link style={{textDecoration: "none"}} to="/CablePage"><button className="flexbox-button">Cable Diameter</button></Link>
        <Link style={{textDecoration: "none"}} to="/LinePage"><button className="flexbox-button">Line Speed</button></Link>
        <Link style={{textDecoration: "none"}} to="/MotorPage"><button className="flexbox-button">Motor Rpm</button></Link>
      </div>
        
    </div>
  )
}
