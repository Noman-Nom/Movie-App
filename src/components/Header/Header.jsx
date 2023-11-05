import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
    <div className="headerLeft">
        <Link  to="/"><img className='header__icon'
         src="/images/logo.png" alt="logo" /> </Link>
        <Link className='header__link' to="/movies/popular"><span>Popular</span>  </Link>
        <Link className='header__link' to="/movies/top_rated"> <span>Top Rated</span> </Link>
        <Link className='header__link' to="/movies/upcoming"><span>Upcoming</span>  </Link>
    </div>
    </div>
  )
}

export default Header
