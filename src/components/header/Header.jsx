import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {

  return (
    
    <div className='d-flex justify-content-around head_obj'>
      <h1 className='text-left text-white p-3'>LOGO</h1>
      <ul className='nav fs-5'>
        <li className="nav-item ">
          <Link to='' className='nav-link text-warning'> Home </Link> 
        </li>

        <li className="nav-item">
          <Link to='Docregisterpath' className='nav-link text-warning'> DocRegister </Link> 
        </li>

        <li className="nav-item">
          <Link to='Patregisterpath' className='nav-link text-warning'> PatRegister </Link> 
        </li>

        <li className="nav-item">
          <Link to='loginpath' className='nav-link text-warning'> Login </Link> 
        </li>
      </ul>
    </div>
  )
}

export default Header