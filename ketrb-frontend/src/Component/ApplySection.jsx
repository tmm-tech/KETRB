import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './applysection.css'; // Import the CSS file for styling

const ApplySection = () => {
  return (
    <div className="homepage-container">
      <section className="welcome-section">
        <h1>Welcome to KETRB</h1>
        <p>
          The Kenya Engineering Technology Registration Board (KETRB) is the regulatory body for engineering technologists in Kenya. We are committed to promoting and regulating the engineering technology profession in the country.
        </p>
      </section>
      <section className="join-us-section">
        <h2>Join Us at KETRB</h2>
        <p>
          Are you an engineering technologist looking to advance your career? KETRB offers a comprehensive application process to help you become a registered member. Follow the steps to meet the application requirements and join our growing community.
        </p>
        <Link to="/application" className="apply-button">
          Apply Now
        </Link>
      </section>
    </div>
  );
};

export default ApplySection;
