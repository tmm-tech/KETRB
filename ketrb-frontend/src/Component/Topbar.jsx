// TopBar.jsx
import React, { useState } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import logo from "../Asset/Logo/ketrbl.jpeg";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component

const TopBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState({
    aboutUs: false,
    newsAndEvents: false,
  });
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSubmenu = (menu) => {
    setShowSubmenu((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <header className="top-bar">
      <div className=".logo-container">
        <img src={logo} alt="logo" className="logo-img" />
      </div>
      <nav className={`nav-links ${showMenu ? "hidden" : ""}`}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <div className="dropdown">
          <div
            className="dropdown-toggle"
            onClick={() => toggleSubmenu("aboutUs")}
          >
            Who We Are{" "}
            <i
              className={`fas ${
                showSubmenu.aboutUs ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </div>
          {showSubmenu.aboutUs && (
            <div className="dropdown-menu">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
              <Link to="/our-mandate" className="dropdown-item">
                Our Mandate
              </Link>
              <Link to="/leadership" className="dropdown-item">
                Leadership
              </Link>
              <Link to="/department" className="dropdown-item">
                Department
              </Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
        <div className="dropdown">
          <div
            className="dropdown-toggle"
            onClick={() => toggleSubmenu("newsAndEvents")}
          >
            News and Events{" "}
            <i
              className={`fas ${
                showSubmenu.newsAndEvents ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </div>
          {showSubmenu.newsAndEvents && (
            <div className="dropdown-menu">
              <Link to="/programs" className="dropdown-item">
                {" "}
                Programs
              </Link>
              <Link to="/news&events" className="nav-link">
                {" "}
                News & Events
              </Link>
            </div>
          )}
        </div>
        <Link to="/charter" className="nav-link">
          Charter
        </Link>
        <Link to="/act" className="nav-link">
          Act
        </Link>
        <Link to="/gallery" className="nav-link">
          Gallery
        </Link>
        <Link to="/faq" className="nav-link">
          FAQ
        </Link>
        <div className="account-dropdown">
          <div className="account-link" onClick={toggleDropdown}>
            Account{" "}
            <i
              className={`fas ${
                showDropdown ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </div>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/login">
                <i className="fas fa-user-circle"></i> Login
              </Link>
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
