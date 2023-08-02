import React from 'react'
import { Link } from 'react-router-dom'
import wollo from "../../assets/wollo.jpg"
import './Nav.css'

function Nav() {

    
  return (
    <div className='nav-bar'>
        <img src={wollo} alt=""  width='60' height='60'/>

        <div className="nav-menu">
            <Link to='/'>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/Signup'}>SIgnup</Link>
           
        </div>
        
    </div>
  )
}

export default Nav