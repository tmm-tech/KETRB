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
        <Link to="/our-mandate" className="mobile-nav-link" onClick={toggleMenu}>Our Mandate</Link>
        <Link to="/leadership" className="mobile-nav-link" onClick={toggleMenu}>Leadership</Link>
        <Link to="/news&events" className="mobile-nav-link" onClick={toggleMenu}>News & Events</Link>
        <Link to="/programs" className="mobile-nav-link" onClick={toggleMenu}>Programs & Projects</Link>
        <Link to="/gallery" className="mobile-nav-link" onClick={toggleMenu}>Gallery</Link>
        <Link to="/charter" className="mobile-nav-link" onClick={toggleMenu}>Charter</Link>
        <Link to="/act" className="mobile-nav-link" onClick={toggleMenu}>Act</Link>
        <Link to="/application" className="mobile-nav-link" onClick={toggleMenu}>Application Requirement</Link>
        <Link to="/tender" className="mobile-nav-link" onClick={toggleMenu}>Tender</Link>
        <Link to="/faq" className="mobile-nav-link" onClick={toggleMenu}>FAQ</Link>
        <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contact Us</Link>

      </nav>
    </div>
  );
};

export default MobileMenu;
