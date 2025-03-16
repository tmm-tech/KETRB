import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-top">
      <div className="footer-container">
        <div className="row">
          <div className="col-lg-3">
            <section className="widget widget_nav_menu quick-links">
              <h3 className="footer-title">Location</h3>
              <MapComponent />
            </section>
          </div>
          <div className="col-lg-3">
            <section className="widget widget_nav_menu quick-links">
              <h3 className="footer-title">Quick Links</h3>
              <ul>
                <li>
                  <Link to="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/news&events" className="footer-link">
                    News & Events
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="footer-link">
                    FAQ
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-lg-3">
            <section className="widget widget_nav_menu quick-links">
              <h3 className="footer-title">Connect With Us</h3>
              <ul className="footer_social">
                <li>
                  <Link
                    to="https://www.facebook.com/KETRBOARD"
                    target="_blank"
                    className="text-2xl"
                  >
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://x.com/KETRB_?t=Lt-49iJFVYSIHO1MImoeHw&s=09"
                    target="_blank"
                    className="text-2xl"
                  >
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/kenya-engineering-technology-registration-board/"
                    target="_blank"
                    className="text-2xl"
                  >
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-lg-3">
            <section className="widget widget_contact_widget">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="fa-ul">
                <li className="flex items-center">
                  <i className="fa fa-map mr-2 text-lg"></i>
                  National Bank Building, 11th floor,Harambee Avenue, Nairobi
                </li>
                {/* <li className="flex items-center">
                  <i className="fa fa-envelope mr-2 text-lg"></i>
                  P. O. Box 37046-0200
                </li> */}
                <li className="flex items-center">
                  <i className="fa fa-phone mr-2 text-lg"></i>
                  <Link to="tel:+254740137877" className="text-m">
                    {" "}
                    +254 740137877
                  </Link>
                </li>
                <li className="flex items-center">
                  <i className="fa fa-envelope mr-2 text-lg"></i>
                  <Link to="mailto:info@ketrb.go.ke" className="text-m">
                    info@ketrb.go.ke
                  </Link>
                </li>
                <li className="flex items-center">
                  <i className="mr-2 text-lg">
                    <FaWhatsapp />
                  </i>
                  <Link to="https://wa.me/254740137877" className="text-m">
                    +254 740137877
                  </Link>
                </li>
                <li className="flex items-center">
                  <i className="fa fa-clock mr-2 text-m"></i>
                  Mon-Fri 08:00 AM – 5:00 PM
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-600 my-4 px-6" />
      <div className="text-center text-sm text-white">
        © 2024 Kenya Engineering Technology Registration Board (KETRB). All
        Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
