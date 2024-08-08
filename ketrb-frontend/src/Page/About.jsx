import React from "react";
import Image1 from "../Asset/IMG_0289.JPG";
import "./about.css";
import { Link } from "react-router-dom";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
const About = () => {
  return (
    <>
      <TopBar />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center">
          <div className="bg-white py-8 rounded shadow w-full md:w-1/2">
            <img src={Image1} alt="About Us" className="w-full rounded" />
          </div>
          <div className="bg-white p-8 rounded shadow w-full md:w-1/2 mt-4 md:mt-0">
            <div className="flex items-center mb-4">
              <hr className="border-b-2 border-green-300 w-1/4" />
              <div className="text-xl font-bold text-green-500 ml-4">
                Who We Are
              </div>
            </div>
            <div className="text-gray-800">
              <p>
                San Africa Agribusiness was started in 2018. Services offered by
                San Africa include; Drip irrigation, greenhouse installation,
                dam lining and construction, agronomic activities, hydroponic
                systems installation and avocado propagation and planting. San
                Africa is a strong believer of Thomas Jefferson's famous quote
                "Agriculture is our wisest pursuit, because it will in the end
                contribute most to real wealth, good morals, and happiness".
              </p>
              <br />
              <br />
              <p>
                At San Africa Agribusiness we are proud to have worked with over
                50,000 farmers across all 47 counties in Kenya. We started by
                offering extension services before starting nursery in Eldoret
                after identifying a major gap of access to good quality planting
                materials by farmers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
