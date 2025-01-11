import React from 'react';
import './Navbar.css';
import Logo from '/Logo.png';
import location from '/location.svg';
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const handleShopClick = () => {
    window.location.href = '/'; // Reloads the home page
  };

  return (
    <div>
      <header className='Header'>
        <div className="logo"><a href="/"><img src={Logo} alt="" /></a></div>
        <ul className='Navbar'>
          <li><NavLink className={(e) => { return e.isActive ? "act" : "nonact" }} to="/" onClick={handleShopClick}>SHOP</NavLink></li>
          <li><NavLink className={(e) => { return e.isActive ? "act" : "nonact" }} to="/about">ABOUT</NavLink></li>
          <li><NavLink className={(e) => { return e.isActive ? "act" : "nonact" }} to="/contact">CONTACT</NavLink></li>
        </ul>
        <div className="buttons">
          <a href="/Contact"><img src={location} alt="" /></a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
