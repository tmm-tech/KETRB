import React, { useState } from "react";
import "./Topbar.css";
import { Link, useLocation} from "react-router-dom";
import logo from "../Asset/Logo/logo_1.png";
import logo1 from "../Asset/Logo/kenya.png";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarker,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaAngleUp,
  FaAngleDown,
} from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const TopBar = () => {
  const location = useLocation();
  const [showDropdownWhoWeAre, setShowDropdownWhoWeAre] = useState(false);
  const [showDropdownDiscover, setShowDropdownDiscover] = useState(false);
  const [showDropdownDownload, setShowDropdownDownload] = useState(false);
  const [showDropdownResources, setShowDropdownResources] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="top-bar">
      {/* Toolbar Area */}
      <div className="toolbar-area py-2">
        {" "}
        {/* Added padding */}
        <div className="container flex justify-between items-center">
          <div className="w-full lg:w-1/2 flex justify-start">
            <ul className="flex items-center flex-wrap menu-lists">
              <li className="mr-4 flex items-center">
                <FaEnvelope className="mr-2" />
                <Link to="mailto:info@ketrb.go.ke">info@ketrb.go.ke</Link>
              </li>
              <li className="mr-4 flex items-center">
                <FaPhone className="mr-2" />
                <Link to="tel: +254740137877">+254 740137877</Link>
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
                <Link
                  to="https://x.com/KETRB_?t=Lt-49iJFVYSIHO1MImoeHw&s=09"
                  target="_blank"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li className="mr-4 flex items-center">
                <Link
                  to="https://www.linkedin.com/company/kenya-engineering-technology-registration-board/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo Section */}

      <div className="logo-container w-full flex items-center">
        <Link to="/">
          <img src={logo1} alt="logo" className="logo1-img mr-2" />
        </Link>
        <h1 className="company-name text-xxl font-bold">
          KENYA ENGINEERING TECHNOLOGY REGISTRATION BOARD
        </h1>
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img mr-4" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className={`nav-links ${showMenu ? "hidden" : ""}`}>
        <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
          Home
        </Link>

        {/* Who We Are Dropdown */}
        <div className="dropdown">
          <div
            className={`dropdown-link ${(showDropdownWhoWeAre || ["/about", "/our-mandate", "/leadership"].includes(location.pathname)) ? "active" : ""}`}
            onClick={() => setShowDropdownWhoWeAre(!showDropdownWhoWeAre) }
          >
            Who We Are {showDropdownWhoWeAre ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {showDropdownWhoWeAre && (
            <div className="dropdown-content">
              <ul>
                <li>
                  <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>About Us</Link>
                </li>
                <li>
                  <Link to="/our-mandate" className={location.pathname === "/our-mandate" ? "active" : ""}>Our Mandate</Link>
                </li>
                <li>
                  <Link to="/leadership" className={location.pathname === "/leadership" ? "active" : ""}>Leadership</Link>
                </li>
                <li>
                  <Link to="#" className={location.pathname === "#" ? "active" : ""}>Management</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Discover & Explore Dropdown */}
        <div className="dropdown">
          <div
            className={`dropdown-link ${(showDropdownDiscover || ["/programs", "/news&events", "/gallery"].includes(location.pathname)) ? "active" : ""}`}
            onClick={() => setShowDropdownDiscover(!showDropdownDiscover)}
          >
            Discover & Explore{" "}
            {showDropdownDiscover ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {showDropdownDiscover && (
            <div className="dropdown-content">
              <ul>
                <li>
                  <Link to="/programs" className={location.pathname === "/programs" ? "active" : ""}>Programs & Projects</Link>
                </li>
                <li>
                  <Link to="/news&events" className={location.pathname === "/news&events" ? "active" : ""}>News & Events</Link>
                </li>
                <li>
                  <Link to="/gallery" className={location.pathname === "/gallery" ? "active" : ""}>Gallery</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="dropdown">
          <div
            className={`dropdown-link ${(showDropdownDownload || ["/act", "/application", "/charter"].includes(location.pathname)) ? "active" : ""}`}
            onClick={() => setShowDropdownDownload(!showDropdownDownload)}
          >
            Download{" "}
            <i
              className={`fas ${
                showDropdownDownload ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </div>
          {showDropdownDownload && (
            <div className="dropdown-content">
              <ul>
                <li>
                  <Link to="/act" className={location.pathname === "/act" ? "active" : ""}>Act</Link>
                </li>
                <li>
                  <Link to="/application" className={location.pathname === "/application" ? "active" : ""}>Application Requirement</Link>
                </li>
                <li>
                  <Link to="/charter" className={location.pathname === "/charter" ? "active" : ""}>Charter</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="dropdown">
          <div
            className={`dropdown-link ${(showDropdownResources || ["/tender", "/faq"].includes(location.pathname)) ? "active" : ""}`}
            onClick={() => setShowDropdownResources(!showDropdownResources)}
          >
            Resources{" "}
            <i
              className={`fas ${
                showDropdownResources ? "fa-angle-up" : "fa-angle-down"
              }`}
            ></i>
          </div>
          {showDropdownResources && (
            <div className="dropdown-content">
              <ul>
                <li>
                  <Link to="/tender" className={location.pathname === "/tender" ? "active" : ""}>Tender</Link>
                </li>
                <li>
                  <Link to="/faq" className={location.pathname === "/faq" ? "active" : ""}>FAQ</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <Link to="#" className={`nav-link ${location.pathname === "#" ? "active" : ""}`}>Careers</Link>
        <Link to="/news&events" className={`nav-link ${location.pathname === "/news&events" ? "active" : ""}`}>Latest News</Link>
      </nav>

      {/* Hamburger for mobile */}
      <div className="mobile-container">
        <Link to="/">
          <img src={logo} alt="logo" className="mobile-logo mr-4" />
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          <i className={`fas ${showMenu ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>

      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default TopBar;
