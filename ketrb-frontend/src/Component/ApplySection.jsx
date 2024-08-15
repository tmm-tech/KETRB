import React from 'react';
import { Link } from 'react-router-dom'; 
import './applysection.css'; 

const ApplySection = () => {
  return (
    <div className="apply-section-container">
      <section className="apply-section">
        <h1>Join The KETRB</h1>
        <p>
          At the Kenya Engineering Technology Registration Board (KETRB), we're committed to advancing engineering technology in Kenya. We’re always on the lookout for talented individuals who are passionate about our mission. If you're eager to contribute and grow with us, we'd love to hear from you.
        </p>
        <p>
          Ready to take the next step in your career and join a dynamic team? Follow our streamlined application process to become a registered member and start making an impact.
        </p>
        <Link to="https://portal.ketrb.go.ke:81" className="apply-button" target='_blank'>
          Apply Now
        </Link>
      </section>
    </div>
  );
};

export default ApplySection;
