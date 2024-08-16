import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './mobilemenu.css';

const MobileMenu = ({ showMenu, toggleMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState({});

  const toggleDropdown = (menu) => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };

  return (
    <div className={`mobile-menu ${showMenu ? 'active' : ''}`}>
      <div className="menu-close" onClick={toggleMenu}>
        <i className="fas fa-times"></i>
      </div>
      <nav className="mobile-nav-links">
        <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link>
        
        {/* Who We Are Dropdown */}
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleDropdown('whoWeAre')}>
            Who We Are <i className={`fas ${dropdownOpen.whoWeAre ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </div>
          {dropdownOpen.whoWeAre && (
            <div className="dropdown-menu">
              <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>About Us</Link>
              <Link to="/our-mandate" className="mobile-nav-link" onClick={toggleMenu}>Our Mandate</Link>
              <Link to="/leadership" className="mobile-nav-link" onClick={toggleMenu}>Leadership</Link>
            </div>
          )}
        </div>
        
        {/* Discover and Explore Dropdown */}
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleDropdown('discoverExplore')}>
            Discover and Explore <i className={`fas ${dropdownOpen.discoverExplore ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </div>
          {dropdownOpen.discoverExplore && (
            <div className="dropdown-menu">
              <Link to="/programs" className="mobile-nav-link" onClick={toggleMenu}>Programs</Link>
              <Link to="/news&events" className="mobile-nav-link" onClick={toggleMenu}>News & Events</Link>
              <Link to="/gallery" className="mobile-nav-link" onClick={toggleMenu}>Gallery</Link>
            </div>
          )}
        </div>
        
        {/* Download Dropdown */}
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleDropdown('download')}>
            Download <i className={`fas ${dropdownOpen.download ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </div>
          {dropdownOpen.download && (
            <div className="dropdown-menu">
              <Link to="/act" className="mobile-nav-link" onClick={toggleMenu}>Act</Link>
              <Link to="/application" className="mobile-nav-link" onClick={toggleMenu}>Requirements</Link>
              <Link to="/charter" className="mobile-nav-link" onClick={toggleMenu}>Charter</Link>
            </div>
          )}
        </div>
        
        {/* Resources Dropdown */}
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleDropdown('resources')}>
            Resources <i className={`fas ${dropdownOpen.resources ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </div>
          {dropdownOpen.resources && (
            <div className="dropdown-menu">
              <Link to="/tender" className="mobile-nav-link" onClick={toggleMenu}>Tender</Link>
              <Link to="/faq" className="mobile-nav-link" onClick={toggleMenu}>FAQ</Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contact Us</Link>
        <Link to="/login" className="mobile-nav-link" onClick={toggleMenu}>Login</Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
