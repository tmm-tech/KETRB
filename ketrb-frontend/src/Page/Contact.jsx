import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
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
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center">
          {/* Map and Location Details */}
          <div className="bg-white py-8 rounded shadow w-full">
            <div className="text-center">
             <MapComponent/>
              <div className="mt-4">
                <div
                  className="text-xl font-bold mb-4"
                  style={{ color: "#f39c12" }}
                >
                  Location
                </div>
                <p>
                  National Bank Building, 11th floor, Harambee Avenue, Nairobi
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded shadow w-full md:w-1/2">
            <div
              className="text-xl font-bold mb-4"
              style={{ color: "#f39c12" }}
            >
              CONTACT US
            </div>
            <div className="text-gray-800">
              <p>
                <b>Call/Text/WhatsApp Us:</b>{" "}
                <a href="tel:+254724027435">+254 724027435</a>
              </p>
              <p>
              <b>Email:</b> <a href="mailto:info@ketrb.go.ke">info@ketrb.go.ke</a>
              </p>
              <p>
              <b>Click here to WhatsApp Us:</b>{" "}
                <a href="https://wa.me/2547240274351">WhatsApp</a>
              </p>
            </div>
          </div>

          {/* Operating Hours and Social Media */}
          <div className="bg-white p-8 rounded shadow w-full md:w-1/2 mt-4 md:mt-0">
            <div
              className="text-xl font-bold mb-4"
              style={{ color: "#f39c12" }}
            >
              OUR HOURS
            </div>
            <div className="text-gray-800 mb-6">
              <p><b>MON-FRI 09:00 am – 5:00 pm</b></p>
              <p><b>SAT-SUN 9:00 am – noon</b></p>
            </div>
            <div
              className="text-xl font-bold mb-4"
              style={{ color: "#f39c12" }}
            >
              FOLLOW US
            </div>

            <div className="text-gray-800">
              <ul className="flex space-x-4">
                <li className="social-icons">
                  <a
                    href="https://web.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-blue-600 hover:text-blue-800"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-blue-400 hover:text-blue-600"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/company/kenya-engineering-technology-registration-board/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-blue-700 hover:text-blue-900"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-red-600 hover:text-red-800"
                  >
                    <FaYoutube />
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
