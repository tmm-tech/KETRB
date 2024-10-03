import React, { useState } from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import logo from "../Asset/Logo/logo_1.png";
import {
  FaEnvelope, FaPhone, FaMapMarker, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaAngleUp, FaAngleDown
} from "react-icons/fa"; 
import MobileMenu from "./MobileMenu";

const TopBar = () => {
  const [showDropdownWhoWeAre, setShowDropdownWhoWeAre] = useState(false);
  const [showDropdownDiscover, setShowDropdownDiscover] = useState(false);
  const [showDropdownDownload, setShowDropdownDownload] = useState(false);
  const [showDropdownResources, setShowDropdownResources] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="top-bar">
      {/* Toolbar Area */}
     <div className="toolbar-area">
        <div className="container flex justify-between items-center w-full">
          {/* Left Section */}
          <div className="left-section flex items-center justify-start w-1/3">
            <ul className="menu-lists flex">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <Link to="mailto:info@ketrb.go.ke">info@ketrb.go.ke</Link>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <Link to="tel: +254740137877">+254 740137877</Link>
              </li>
            </ul>
          </div>
      
          {/* Social Media Icons */}
          <div className="social-media-icons flex justify-center w-1/3">
            <ul className="flex">
              <li className="mr-4 flex items-center">
                <Link to="https://www.facebook.com/KETRBOARD" target="_blank">
                  <FaFacebook />
                </Link>
              </li>
              <li className="mr-4 flex items-center">
                <Link to="https://x.com/KETRB_?t=Lt-49iJFVYSIHO1MImoeHw&s=09" target="_blank">
                  <FaTwitter />
                </Link>
              </li>
              <li className="mr-4 flex items-center">
                <Link to="https://www.linkedin.com/company/kenya-engineering-technology-registration-board/" target="_blank">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
      
          {/* Right Section */}
          <div className="right-section flex items-center justify-end w-1/3">
            <ul className="menu-lists flex">
              <li className="flex items-center">
                <FaMapMarker className="mr-2" />
                <p>Harambee Avenue, Nairobi</p>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2" />
                <p>Mon-Fri 08:00 AM – 5:00 PM</p>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* Logo Section */}
      
      <div className="logo-container w-full flex items-center"> 
        <Link to="/"><img src={logo} alt="logo" className="logo-img mr-4" /></Link>
        <h1 className="company-name text-xxl font-bold">KENYA ENGINEERING TECHNOLOGY REGISTRATION BOARD</h1>
</div>

      {/* Navigation */}
      <nav className={`nav-links ${showMenu ? "hidden" : ""}`}>
        <Link to="/" className="nav-link">Home</Link>

        {/* Who We Are Dropdown */}
        <div className="dropdown">
          <div className="dropdown-link" onClick={() => setShowDropdownWhoWeAre(!showDropdownWhoWeAre)}>
            Who We Are {showDropdownWhoWeAre ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {showDropdownWhoWeAre && (
            <div className="dropdown-content">
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/our-mandate">Our Mandate</Link></li>
                <li><Link to="/leadership">Leadership</Link></li>
              </ul>
            </div>
          )}
        </div>

        {/* Discover & Explore Dropdown */}
        <div className="dropdown">
          <div className="dropdown-link" onClick={() => setShowDropdownDiscover(!showDropdownDiscover)}>
            Discover & Explore {showDropdownDiscover ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {showDropdownDiscover && (
            <div className="dropdown-content">
              <ul>
                <li><Link to="/programs">Programs & Projects</Link></li>
                <li><Link to="/news&events">News & Events</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
              </ul>
            </div>
          )}
        </div>

       <div className="dropdown">
  <div className="dropdown-link" onClick={() => setShowDropdownDownload(!showDropdownDownload)}>
    Download{" "}
    <i className={`fas ${showDropdownDownload ? "fa-angle-up" : "fa-angle-down"}`}></i>
  </div>
  {showDropdownDownload && (
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
  <div className="dropdown-link" onClick={() => setShowDropdownResources(!showDropdownResources)}>
    Resources{" "}
    <i className={`fas ${showDropdownResources ? "fa-angle-up" : "fa-angle-down"}`}></i>
  </div>
  {showDropdownResources && (
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
      </nav>

      {/* Hamburger for mobile */}
        <div className="mobile-container">
        <Link to="/"><img src={logo} alt="logo" className="mobile-logo mr-4" /></Link>
      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fas ${showMenu ? "fa-times" : "fa-bars"}`}></i>
      </div>
        </div>
      
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default TopBar;
