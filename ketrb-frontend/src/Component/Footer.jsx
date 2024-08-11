import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,    
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-top">
      <div className="footer-container">
        <div className="row">
          <div className="col-lg-3">
            <section className="widget widget_finoptissocialiconwi_widget">
              <h3 className="footer-title">Location</h3>
              <iframe
                title="Google Map - Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2371777449044!2d36.82447261431332!3d-1.2172884359931836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f178181c41f85%3A0x16c52e6708c1aa0a!2sq=LOWER%20KABETE%20%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1649235028032!5m2!1sen!2ske"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </section>
            <section className="widget widget_finoptissocialiconwi_widget">
              <br />
              <h3 className="footer-title">Follow Us</h3>
              <ul className="footer_social">
                <li>
                  <Link to="#" target="_blank" className="text-2xl">
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank" className="text-2xl">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank" className="text-2xl">
                    <FaLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank" className="text-2xl">
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
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
            <div className="recent-widget">
              <h3 className="footer-title">News & Events</h3>
              <div className="recent-post-widget widget clearfix"></div>
            </div>
          </div>
          <div className="col-lg-3">
            <section className="widget widget_contact_widget">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="fa-ul">
                <li className="flex items-center">
                  <i className="fa fa-map mr-2 text-lg"></i>
                  National Bank Building, 11th floor,Harambee Avenue, Nairobi
                </li>
                <li className="flex items-center">
                  <i className="fa fa-envelope mr-2 text-lg"></i>
                  P. O. Box 37046-0200
                </li>
                <li className="flex items-center">
                  <i className="fa fa-phone mr-2 text-lg"></i>
                  <Link to="tel:+254740137877" className="text-m">
                    {" "}
                    vm +254 740137877
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
                  <Link to="https://wa.me/254724027435" className="text-m">
                    +254724027435
                  </Link>
                </li>
                <li className="flex items-center">
                  <i className="fa fa-clock mr-2 text-m"></i>
                  Mon-Fri 09:00 AM – 5:00 PM
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
