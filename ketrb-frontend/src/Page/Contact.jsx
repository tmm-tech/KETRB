import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";

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
              <iframe
                title="Google Map - Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.2371777449044!2d36.82447261431332!3d-1.2172884359931836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f178181c41f85%3A0x16c52e6708c1aa0a!2sq=LOWER%20KABETE%20%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1649235028032!5m2!1sen!2ske"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="mt-4">
                <h2
                  className="text-2xl font-extrabold mb-4"
                  style={{ color: "#f39c12" }}
                >
                  Location
                </h2>
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
                Call/Text/WhatsApp Us:{" "}
                <a href="tel:+254724027435">+254 724027435</a>
              </p>
              <p>
                Email: <a href="mailto:info@ketrb.go.ke">info@ketrb.go.ke</a>
              </p>
              <p>
                Click here to WhatsApp Us:{" "}
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
              <p>MON-FRI 09:00 am – 5:00 pm</p>
              <p>SAT-SUN 9:00 am – noon</p>
            </div>
            <div
              className="text-xl font-bold mb-4"
              style={{ color: "#f39c12" }}
            >
              FOLLOW US
            </div>
            <div className="text-gray-800">
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="https://web.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-blue-600 hover:text-blue-800"
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-blue-400 hover:text-blue-600"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/kenya-engineering-technology-registration-board/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-blue-700 hover:text-blue-900"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
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
