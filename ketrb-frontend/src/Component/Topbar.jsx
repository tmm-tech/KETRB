// TopBar.jsx
import React, { useState } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import logo from "../Asset/Logo/ketrbl.jpeg";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component

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
        <Link to="/"><img src={logo} alt="logo" className="logo-img" /></Link>
      </div>
      <nav className={`nav-links ${showMenu ? "hidden" : ""}`}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <div className="dropdown">
          <div className="dropdown-link" onClick={toggleDropdown}>
            Who We Are{" "}
            <i
              className={`fas ${
                showDropdown ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </div>
          {showDropdown && (
            <div className="dropdown-content">
              <ul>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/our-mandate">Our Mandate</Link>
                </li>
                <li>
                  <Link to="/leadership">Leadership</Link>
                </li>
                
                {/* <li>
                  <Link to="/department">Department</Link>
                </li> */}
              </ul>
            </div>
          )}
        </div>

       
        <div className="dropdown">
          <div className="dropdown-link" onClick={toggleDropdown}>
            Discover & Explore{" "}
            <i
              className={`fas ${
                showDropdown ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </div>
          {showDropdown && (
            <div className="dropdown-content">
              <ul>
                <li>
                  <Link to="/programs">Programs</Link>
                </li>
                <li>
                  <Link to="/news&events">News & Events</Link>
                </li>
                <li>
                <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Link to="/charter" className="nav-link">
          Charter
        </Link>
        <Link to="/act" className="nav-link">
          Act
        </Link>
        <Link to="/faq" className="nav-link">
          FAQ
        </Link>
        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
        <div className="dropdown">
          <div className="dropdown-link" onClick={toggleDropdown}>
            Account{" "}
            <i
              className={`fas ${
                showDropdown ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </div>
          {showDropdown && (
            <div className="dropdown-content">
              <ul>
                <li>
                  <Link to="/login">
                    <i className="fas fa-user-circle"></i> Login
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fas ${showMenu ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default TopBar;
