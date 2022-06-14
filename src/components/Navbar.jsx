import React from 'react'

import navbarLogo from '../images/tv.svg'
import navbarMenu from '../images/Menu.svg'
import navbarSearch from '../images/search.svg'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar__container">
      <nav className='navbar'>
        <Link to='/' className='navbar__logo'>
          <img src={navbarLogo} alt='/' />
          <h1>MovieBox</h1>
        </Link>
        <form className='navbar__input'>
          <input type="search" placeholder="What do you want to watch?" />
          <img className='navbar__input--search' src={navbarSearch} alt='Search' />
        </form>
        <div className='navbar__buttons'>
          <Link to='signIn' >Sign in</Link>
          <button><img src={navbarMenu} alt="/"/></button>
        </div>
      </nav>
    </div>

  )
}

export default Navbar