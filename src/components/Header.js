import React from 'react'
import Menu from './Menu'
import "./Components.scss"

export default function Header() {
  return (
    <div className='header'>
       
        <div className='headermenu'>
          <Menu/>
        </div>
        
    </div>
  )
}
