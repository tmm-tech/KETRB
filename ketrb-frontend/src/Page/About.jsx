import React from 'react';
import Image1 from '../Asset/IMG_0289.JPG';
import './about.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white about-container">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-heading px-4">About Us</h2>
          <h3 className="about-subheading px-4">Your Understanding Partner</h3>
          <div className="about-description px-4">
            <p>San Africa Agribusiness was started in 2018. Services offered by San Africa include; Drip irrigation, greenhouse installation, dam lining and construction, agronomic activities, hydroponic systems installation and avocado propagation and planting. San Africa is a strong believer of Thomas Jefferson's famous quote "Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness"</p>
          </div>
          <div className="read-more-btn">
            <Link
              className="read-more-link"
              to="/about"
              rel="noopener noreferrer">
              Read More
            </Link>

          </div>
        </div>
        <div className="about-image">
          <img
            className="about-image-item"
            src={Image1}
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
}

export default About;