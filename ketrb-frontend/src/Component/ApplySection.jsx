import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import './applysection.css'; // Import the CSS file for styling

const ApplySection = () => {
  return (
    <div className="apply-section-container">
      <section className="apply-section">
        <h1>Join KETRB</h1>
        <p>
          At the Kenya Engineering Technology Registration Board (KETRB), we're committed to advancing engineering technology in Kenya. We’re always on the lookout for talented individuals who are passionate about our mission. If you're eager to contribute and grow with us, we'd love to hear from you.
        </p>
        <p>
          Ready to take the next step in your career and join a dynamic team? Follow our streamlined application process to become a registered member and start making an impact.
        </p>
        <Link to="/application" className="apply-button">
          Apply Now
        </Link>
      </section>
    </div>
  );
};

export default ApplySection;
