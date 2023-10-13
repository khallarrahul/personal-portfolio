import React from 'react'
import R from '../../src/assets/R.png'
import {NavLink} from 'react-router-dom'


function NavBar() {
  return (
    <div>
        <nav className='navbar'>
            <img src={R} alt="logo" className='logo'/>
            <div className='desktopMenu'>
                <NavLink className='desktopMenuList' to='/home'>Home</NavLink>
                <NavLink className='desktopMenuList' to='/about'>About</NavLink>
                <NavLink className='desktopMenuList' to='/portfolio'>Portfolio</NavLink>
                <NavLink className='desktopMenuList' to='/clients'>Clients</NavLink>
            </div>
            <button>
              <img src='' alt='' className='desktopMenuImg' />
              Contact Me
            </button>
        </nav>
    </div>
  )
}

export default NavBar