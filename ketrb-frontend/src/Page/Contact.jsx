import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import MapComponent from "../Component/MapComponent";
import "./contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <TopBar />
      <div style={{ paddingTop: '180px' }} className="contact-container">
        <div className="contact-inner-container">
          {/* Map and Location Details */}
          <div className="contact-map-section">
            <div className="contact-map-wrapper">
              <MapComponent />
              <div className="contact-location-details">
                <div className="contact-location-header">Location</div>
                <h3>
                  National Bank Building, 11th floor, Harambee Avenue, Nairobi
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-info-wrapper">
          {/* Contact Information */}
          <div className="contact-details-section">
            <div className="contact-section-header">CONTACT US</div>
            <div className="contact-details">
              <p>
                <b>Call/Text/WhatsApp Us:</b>{" "}
                <a href="tel:+254724027435">+254 724027435</a>
              </p>
              <p>
                <b>Email:</b>{" "}
                <a href="mailto:info@ketrb.go.ke">info@ketrb.go.ke</a>
              </p>
              <p>
                <b>Click here to WhatsApp Us:</b>{" "}
                <a href="https://wa.me/2547240274351">WhatsApp</a>
              </p>
            </div>
          </div>

          {/* Operating Hours and Social Media */}
          <div className="contact-hours-social-section">
            <div className="contact-section-header">OUR HOURS</div>
            <div className="contact-hours-details">
              <p>
                <b>MON-FRI 08:00 am – 5:00 pm</b>
              </p>
            </div>
            <div className="contact-section-header">FOLLOW US</div>
            <div className="contact-social-media">
              <ul className="contact-social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/KETRBOARD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook-icon"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/KETRB_?t=Lt-49iJFVYSIHO1MImoeHw&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitter-icon"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/kenya-engineering-technology-registration-board/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-icon"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
