import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
const Contact = () => {
  return (
    <>
      <TopBar />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center">
          <div className="bg-white py-8 rounded shadow w-full md:w-1/2">
            {/* First Location */}
            <div className="text-center">
              <iframe
                title="Google Map - Location 1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2371777449044!2d36.82447261431332!3d-1.2172884359931836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f178181c41f85%3A0x16c52e6708c1aa0a!2sq=LOWER%20KABETE%20%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1649235028032!5m2!1sen!2ske"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="mt-4">
                <p className="text-lg font-semibold">Location 1</p>
                <p>Lower Kabete, Nairobi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          {/* Left column */}
          <div className="bg-white p-8 rounded shadow w-full md:w-1/2 mt-4 md:mt-0 mr-4">
            <div className="text-xl font-bold text-green-500 mb-4">
              CONTACT US
            </div>
            <div className="text-gray-800">
              <p>
                Call/Text/WhatsApp Us:{" "}
                <a href="tel:+2547240274351">+254 7240274351</a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:kipkogeit@gmail.com">kipkogeit@gmail.com</a>
              </p>
              <p>
                Click here to WhatsApp Us:{" "}
                <Link to="https://wa.me/2547240274351">WhatsApp</Link>
              </p>
            </div>
          </div>
          {/* Right column */}
          <div className="bg-white p-8 rounded shadow w-full md:w-1/2 mt-4 md:mt-0">
            <div className="text-xl font-bold text-green-500 mb-4">
              OUR HOURS
            </div>
            <div className="text-gray-800">
              <p>MON-FRI 09:00 am – 5:00 pm</p>
              <p>SAT-SUN 9:00 am – noon</p>
            </div>
            <div className="text-xl font-bold text-green-500 mt-8 mb-4">
              FOLLOW US
            </div>
            <div className="text-gray-800">
              <ul className="footer_social">
                <li>
                  <Link
                    to="https://web.facebook.com/profile.php?id=61555197753208"
                    target="_blank"
                    className="text-3xl"
                  >
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank" className="text-3xl">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank" className="text-3xl">
                    <FaLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to="#" target="_blank" className="text-3xl">
                    <FaYoutube />
                  </Link>
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
