import React from "react";
//import Image1 from "../Asset/Carousel/img_001.jpeg";
import "./homeabout.css";
import { Link } from "react-router-dom";
import Faf1 from "../Asset/About/Fafu1.jpeg";

const HomeAbout = () => {
  return (
    <div>
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="containers">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src={Faf1} alt="About Us" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4 home-about">About Us</h2>
              <p className="about-description">
              KENYA ENGINEERING TECHNOLOGY REGISTRATION BOARD (KETRB) was established in accordance with the Engineering Technology Act CAP.530A
              </p>
              {/*<p>
                The Board is also mandated to verify that engineering
                professional services and works are undertaken by persons
                registered under the Act as well as ensure that standards and
                professional ethics for health and safety of the public are
                observed. The members of the Board were appointed to office on
                24th October, 2016 by the CS Ministry of Education.
              </p>*/}
              <button className="btn btn-primary"><Link to="/about">Learn More</Link></button>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  );
};

export default HomeAbout;
