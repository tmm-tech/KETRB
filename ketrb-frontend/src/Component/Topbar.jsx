import React, { useState } from "react";
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
 <header className="top-bar bg-white fixed w-full z-50 shadow-lg">
      {/* Toolbar Area */}
      <div className="bg-yellow-500 text-white py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="mr-2" />
            <Link to="mailto:info@ketrb.go.ke">info@ketrb.go.ke</Link>
            <FaPhone className="ml-4 mr-2" />
            <Link to="tel: +254740137877">+254 740137877</Link>
            <FaMapMarker className="ml-4 mr-2" />
            <p>Harambee Avenue, Nairobi</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaClock className="mr-2" />
            <p>Mon-Fri 08:00 AM – 5:00 PM</p>
            <Link to="https://www.facebook.com/KETRBOARD" target="_blank">
              <FaFacebook />
            </Link>
            <Link to="https://x.com/KETRB_?t=Lt-49iJFVYSIHO1MImoeHw&s=09" target="_blank">
              <FaTwitter />
            </Link>
            <Link to="https://www.linkedin.com/company/kenya-engineering-technology-registration-board/" target="_blank">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="logo" className="w-32" />
          </Link>
          <h1 className="text-xl font-bold text-blue-600">
            KENYA ENGINEERING TECHNOLOGY REGISTRATION BOARD
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t-4 border-yellow-500">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-blue-600 hover:text-yellow-500">Home</Link>

            {/* Who We Are Dropdown */}
            <div className="relative">
              <div onClick={() => setShowDropdownWhoWeAre(!showDropdownWhoWeAre)} className="cursor-pointer flex items-center text-blue-600 hover:text-yellow-500">
                Who We Are {showDropdownWhoWeAre ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              {showDropdownWhoWeAre && (
                <div className="absolute top-full left-0 bg-white shadow-lg py-2 w-48">
                  <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
                  <Link to="/our-mandate" className="block px-4 py-2 hover:bg-gray-100">Our Mandate</Link>
                  <Link to="/leadership" className="block px-4 py-2 hover:bg-gray-100">Leadership</Link>
                </div>
              )}
            </div>

            {/* Discover & Explore Dropdown */}
            <div className="relative">
              <div onClick={() => setShowDropdownDiscover(!showDropdownDiscover)} className="cursor-pointer flex items-center text-blue-600 hover:text-yellow-500">
                Discover & Explore {showDropdownDiscover ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              {showDropdownDiscover && (
                <div className="absolute top-full left-0 bg-white shadow-lg py-2 w-48">
                  <Link to="/programs" className="block px-4 py-2 hover:bg-gray-100">Programs & Projects</Link>
                  <Link to="/news&events" className="block px-4 py-2 hover:bg-gray-100">News & Events</Link>
                  <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-100">Gallery</Link>
                </div>
              )}
            </div>

       <div className="relative">
        <div onClick={() => setShowDropdownDownload(!showDropdownDownload)} className="cursor-pointer flex items-center text-blue-600 hover:text-yellow-500">
            Download {showDropdownDownload ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {showDropdownDownload && (
             <div className="absolute top-full left-0 bg-white shadow-lg py-2 w-48">
                  <Link to="/act" className="block px-4 py-2 hover:bg-gray-100">Act</Link>               
                  <Link to="/application" className="block px-4 py-2 hover:bg-gray-100">Application Requirement</Link>               
                  <Link to="/charter" className="block px-4 py-2 hover:bg-gray-100">Charter</Link>
            </div>
          )}
        </div>
         
        <div className="relative">
          <div onClick={() => setShowDropdownResources(!showDropdownResources)} className="cursor-pointer flex items-center text-blue-600 hover:text-yellow-500">
            Resources {showDropdownResources ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          {showDropdownResources && (
            <div className="absolute top-full left-0 bg-white shadow-lg py-2 w-48">
                  <Link to="/tender" className="block px-4 py-2 hover:bg-gray-100">Tender</Link>
                  <Link to="/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
            </div>
          )}
        </div>
  </div>

 {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-blue-600 focus:outline-none">
              <i className={`fas ${showMenu ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </header>
  );
};

export default TopBar;
