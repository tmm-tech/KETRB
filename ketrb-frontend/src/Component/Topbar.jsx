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
     <div className="toolbar-area py-4"> {/* Added padding */}
  <div className="container flex justify-between items-center">
    <div className="w-full lg:w-1/2 flex justify-start">
      <ul className="flex items-center flex-wrap menu-lists">
        <li className="mr-4 flex items-center">
                <FaEnvelope className="mr-2" />
                <Link to="mailto:info@ketrb.go.ke">info@ketrb.go.ke</Link>
              </li>
              <li className="mr-4 flex items-center">
                <FaPhone className="mr-2" />
                <Link to="tel: +254724027435">+254 724027435</Link>
              </li>
              <li className="mr-4 flex items-center">
                <FaMapMarker className="mr-2" />
                <p>Harambee Avenue, Nairobi</p>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end">
            <ul className="flex items-center flex-wrap menu-lists">
              <li className="mr-4 flex items-center">
                <FaClock className="mr-2" />
                <p>Mon-Fri 08:00 AM – 5:00 PM</p>
              </li>
              {/* Social Media Icons */}
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
        </div>
      </div>

      {/* Logo Section */}
      <div className="logo-container py-4 flex items-center"> 
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="logo-img mr-4" /> {/* Added margin-right for spacing */}
        <h1 className="company-name text-xl font-bold">KENYA ENGINEERING TECHNOLOGY REGISTRATION BOARD</h1>
      </Link>
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
      <div className="hamburger" onClick={toggleMenu}>
        <i className={`fas ${showMenu ? "fa-times" : "fa-bars"}`}></i>
      </div>
      
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default TopBar;
