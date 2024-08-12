import React from "react";
import Image1 from "../Asset/Gallery/IMG_3198.JPG";
import "./homeabout.css";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div>
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="containers">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src={Image1} alt="About Us" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4 home-about">About Us</h2>
              <p>
                The Kenya Engineering Technology Registration Board (KETRB) was
                established in accordance with the Engineering Technology Act No
                23 of 2016 Part II Section 3. (1) to set standards for
                engineering technologists and technicians, register and issue
                licenses to qualified persons as per the provision of the Act.
              </p>
              <p>
                The Board is also mandated to verify that engineering
                professional services and works are undertaken by persons
                registered under the Act as well as ensure that standards and
                professional ethics for health and safety of the public are
                observed. The members of the Board were appointed to office on
                24th October, 2016 by the CS Ministry of Education.
              </p>
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
