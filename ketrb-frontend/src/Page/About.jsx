import React from "react";
import Image1 from "../Asset/IMG_0289.JPG";
import "./about.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import partner1 from "../Asset/Partners/cars.jpeg";
import partner2 from "../Asset/Partners/subaru.jpeg";
import partner3 from "../Asset/Partners/mercedes.jpeg";
import partner4 from "../Asset/Partners/honda.jpeg";
const About = () => {
  return (
    <>
      <TopBar />
      <div className="about-container mx-auto px-4 py-12">
        {/* About Section */}
        <div className="about-content max-w-6xl mx-auto flex flex-wrap items-center">
          <div className="about-image-item w-full md:w-1/2">
            <img src={Image1} alt="About Us" className="w-full rounded" />
          </div>
          <div className="about-text bg-white p-8 rounded shadow w-full md:w-1/2 mt-4 md:mt-0">
            <div className="about-subheading">
              Who We Are
            </div>
            <div className="text-gray-800">
              <p>
                The Kenya Engineering Technology Registration Board (KETRB) was
                established in accordance with the Engineering Technology Act No
                23 of 2016 Part II Section 3. (1) to set standards for
                engineering technologists and technicians, register and issue
                licenses to qualified persons as per the provision of the Act.
              </p>
              <br />
              <p>
                At San Africa Agribusiness, we are proud to have worked with over
                50,000 farmers across all 47 counties in Kenya. We started by
                offering extension services before starting a nursery in Eldoret
                after identifying a major gap in access to good quality planting
                materials by farmers.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission and Vision Section */}
        <div className="mission-vision-section my-12">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mission-vision-content bg-white p-8 rounded shadow">
              <h2 className="about-heading">Our Mission</h2>
              <p className="about-description">
                Our mission is to empower farmers with the knowledge and resources
                needed to maximize their agricultural productivity and ensure
                sustainable development in Kenya.
              </p>
              <h2 className="about-heading mt-8">Our Vision</h2>
              <p className="about-description">
                Our vision is to become the leading agribusiness partner,
                promoting innovation and sustainability in agriculture across
                Africa.
              </p>
            </div>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="services-section my-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="about-heading text-center">Our Services</h2>
            <div className="services-content grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="service-item bg-white p-6 rounded shadow">
                <h3 className="about-subheading">Agricultural Consultancy</h3>
                <p className="about-description">
                  We offer expert consultancy services to help farmers improve
                  their yields and manage their farms more effectively.
                </p>
              </div>
              <div className="service-item bg-white p-6 rounded shadow">
                <h3 className="about-subheading">Quality Planting Materials</h3>
                <p className="about-description">
                  We provide high-quality seeds and seedlings to ensure farmers
                  have access to the best planting materials.
                </p>
              </div>
              <div className="service-item bg-white p-6 rounded shadow">
                <h3 className="about-subheading">Training and Workshops</h3>
                <p className="about-description">
                  We conduct training sessions and workshops to educate farmers on
                  the latest farming techniques and technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="core-values-section my-12 bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="about-heading">Core Values</h2>
            <div className="core-values-content grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="core-value-item p-6">
                <h3 className="about-subheading">Integrity</h3>
                <p className="about-description">
                  We uphold the highest standards of integrity in all our actions.
                </p>
              </div>
              <div className="core-value-item p-6">
                <h3 className="about-subheading">Excellence</h3>
                <p className="about-description">
                  We are committed to delivering excellence in every aspect of our
                  work.
                </p>
              </div>
              <div className="core-value-item p-6">
                <h3 className="about-subheading">Innovation</h3>
                <p className="about-description">
                  We embrace change and constantly seek innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="partners-section my-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="about-heading">Our Partners</h2>
            <div className="partners-content grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              {/* Repeat this block for each partner */}
              <div className="partner-item">
                <img
                  src={partner1}
                  alt="Partner Name"
                  className="partner-logo w-full h-auto"
                />
              </div>
              <div className="partner-item">
                <img
                  src={partner2}
                  alt="Partner Name"
                  className="partner-logo w-full h-auto"
                />
              </div>
              <div className="partner-item">
                <img
                  src={partner3}
                  alt="Partner Name"
                  className="partner-logo w-full h-auto"
                />
              </div>
              <div className="partner-item">
                <img
                  src={partner4}
                  alt="Partner Name"
                  className="partner-logo w-full h-auto"
                />
              </div>
              {/* Add more partner images here */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
