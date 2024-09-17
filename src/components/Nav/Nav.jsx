import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { FaBookmark, FaCompass } from "react-icons/fa6";
import Logo from '/Logo.png'

const NavBar = () => {
  return (
    <nav>
      <div className="nav-logo"> <img src={Logo} alt="Logo" /></div>
      
      <ul className="nav-list">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active-tab' : '')}
          >
            <FaCompass />
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/saved" 
            className={({ isActive }) => (isActive ? 'active-tab' : '')}
          >
            <FaBookmark />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
