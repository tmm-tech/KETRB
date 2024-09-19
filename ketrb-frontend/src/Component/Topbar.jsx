// TopBar.jsx
import React, { useState } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import logo from "../Asset/Logo/logo_1.png";
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
      {/* Toolbar Area */}
      <div className="toolbar-area bg-gray-800 text-white py-2">
        <div className="container flex justify-between items-center">
          <div className="w-full lg:w-1/2 flex justify-start">
            <ul className="flex items-center flex-wrap menu-lists">
              <li className="mr-4 flex items-center">
                <FaEnvelope className="mr-2" />
                <Link to="mailto:kipkogeit@gmail.com">kipkogeit@gmail.com</Link>
              </li>
              <li className="mr-4 flex items-center">
                <FaPhone className="mr-2" />
                <Link to="tel:+254729777711">+254 724027435</Link>
              </li>
              <li className="mr-4 flex items-center">
                <FaMapMarker className="mr-2" />
                <p>Lower Kabete / Kiplombe Eldoret</p>
              </li>
            </ul>
          </div>
          <div cl   vmassName="w-full lg:w-1/2 flex justify-end">
            <ul className="flex items-center flex-wrap menu-lists">
              <li className="mr-4 flex items-center">
                <FaClock className="mr-2" />
                <p>Mon - Fri: 8:00 - 16:00, Sat: 8:00 - Noon</p>
              </li>
              <li className="mr-4 flex items-center">
                <Link to="https://web.facebook.com/profile.php?id=61555197753208" target="_blank">
                  <FaFacebook />
                </Link>
              </li>
              <li className="mr-4 flex items-center">
                <Link to="#" target="_blank">
                  <FaTwitter />
                </Link>
              </li>
              <li className="mr-4 flex items-center">
                <Link to="#" target="_blank">
                  <FaLinkedin />
                </Link>
              </li>
              <li className="mr-4 flex items-center">
                <Link to="#" target="_blank">
                  <FaInstagram />
                </Link>
              </li>
              <li className="mr-4 flex items-center">
                <Link to="#" target="_blank">
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>   vm
      <div className=".logo-container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
          <h1 className="company-name text-xl font-bold">KENYA ENGINEERING TECHNOLOGY REGISTRATION BOARD</h1>
        </Link>
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
            <div
              className="dropdown-content group-hover:block"
              id="dropdown-items"
            >
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
                  <Link to="/programs">Programs & Projects</Link>
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
        <div className="dropdown">
          <div className="dropdown-link" onClick={toggleDropdown}>
            Download{" "}
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
                  <Link to="/act">Act</Link>
                </li>
                <li>
                  <Link to="/application">Application Requirement</Link>
                </li>
                <li>
                  <Link to="/charter">Charter</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="dropdown">
          <div className="dropdown-link" onClick={toggleDropdown}>
            Resources{" "}
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
                  <Link to="/tender">Tender</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fas ${showMenu ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default TopBar;
