import React from "react";
import { Element } from "react-scroll";
import CountUp from "react-countup";
import "./facts.css";

const Facts = () => {
  return (
    <div>
      {/* Facts Start */}
      <Element name="facts" className="container-xxl py-5">
        <div className="container-fact">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-certificate fa-4x text-primary mb-4"></i>
                <h5 className="mb-3">Years Experience</h5>
                <h1 className="display-5 mb-0">
                  <CountUp start={0} end={3455} duration={2} separator="," />
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-users-cog fa-4x text-primary mb-4"></i>
                <h5 className="mb-3">Regions</h5>
                <h1 className="display-5 mb-0">
                  <CountUp start={0} end={6234} duration={2} separator="," />
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-globe fa-4x text-primary mb-4"></i>
                <h5 className="mb-3">Countries</h5>
                <h1 className="display-5 mb-0">
                  <CountUp start={0} end={2234} duration={2} separator="," />
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-check fa-4x text-primary mb-4"></i>
                <h5 className="mb-3">Projects Done</h5>
                <h1 className="display-5 mb-0">
                  <CountUp start={0} end={1234} duration={2} separator="," />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Element>

      {/* Facts End */}
    </div>
  );
};

export default Facts;
