import React from 'react'
import './NavbarStyle.css'
import logo from '../../media/testLogo.jpg'
import user from '../../media/user.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="brand-info">
          <img src={logo} alt="" className="logo" />
          <h3 className='brand-text'>Medical Darpan</h3>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <a href="#">Home</a>
              <a href="#">Products</a>
              <a href="#">Distributors</a>
              <a href="#">Manufacturers</a>
              <a href="#">About us</a>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="log-in">
          <a href="#" className='login'>Login</a>
          <img className='user-icon' src={user} alt="" />
        </div>
    </div>
  )
}

export default Navbar