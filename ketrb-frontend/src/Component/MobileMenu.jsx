// MobileMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './mobilemenu.css'; // Create this CSS file for mobile menu styles

const MobileMenu = ({ showMenu, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${showMenu ? 'active' : ''}`}>
      <div className="menu-close" onClick={toggleMenu}>
        <i className="fas fa-times"></i>
      </div>
      <nav className="mobile-nav-links">
        <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>About Us</Link>
        <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contact Us</Link>
        <Link to="/news&events" className="mobile-nav-link" onClick={toggleMenu}>News & Events</Link>
        <Link to="/faq" className="mobile-nav-link" onClick={toggleMenu}>FAQ</Link>
        <Link to="/login" className="mobile-nav-link" onClick={toggleMenu}>Login</Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
