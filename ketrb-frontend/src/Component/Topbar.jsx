// TopBar.jsx
import React, { useState } from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';
import logo from '../Asset/Logo/ketrbl.jpeg';
import MobileMenu from './MobileMenu'; // Import the MobileMenu component

const TopBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="top-bar">
      <div className=".logo-container">
        <img src={logo} alt="logo" className="logo-img" />
      </div>
      <nav className={`nav-links ${showMenu ? 'hidden' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
        <Link to="/news&events" className="nav-link">News & Events</Link>
        <Link to="/faq" className="nav-link">FAQ</Link>
        <div className="account-dropdown">
          <div className="account-link" onClick={toggleDropdown}>
            Account <i className={`fas ${showDropdown ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
          </div>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/login"><i className="fas fa-user-circle"></i> Login</Link>
            </div>
          )}
        </div>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fas ${showMenu ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default TopBar;
