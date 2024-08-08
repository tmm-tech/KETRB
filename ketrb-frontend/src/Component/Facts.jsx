import React from 'react'
import logo from '../Asset/Logo/ketrb.png';
// import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import CountUp from 'react-countup';
import "./facts.css";
const Facts = () => {
  return (
    <div>
        {/* Facts Start */}
        <Element name="facts" className="container-xxl py-5">
                <div className="container-fact">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-certificate fa-4x text-primary mb-4"></i>
                                <h5 className="mb-3">Years Experience</h5>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">
                                    <CountUp start={0} end={3455} duration={2} separator="," />
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-users-cog fa-4x text-primary mb-4"></i>
                                <h5 className="mb-3">Regions</h5>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">
                                    <CountUp start={0} end={6234} duration={2} separator="," />
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-globe fa-4x text-primary mb-4"></i>
                                <h5 className="mb-3">Countries</h5>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">
                                    <CountUp start={0} end={2234} duration={2} separator="," />
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-check fa-4x text-primary mb-4"></i>
                                <h5 className="mb-3">Projects Done</h5>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">
                                    <CountUp start={0} end={1234} duration={2} separator="," />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
            {/* Facts End */}

            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="containers">
                    <div className="row">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                            <img
                                src={logo}
                                alt="About Us"
                                className="img-fluid rounded"
                            />
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
                            <h2 className="mb-4">About Us</h2>
                            <p>
                            The Kenya Engineering Technology Registration Board (KETRB) was established in accordance with the Engineering Technology Act No 23 of 2016 Part II Section 3. (1) to set standards for engineering technologists and technicians, register and issue licenses to qualified persons as per the provision of the Act. 
                            </p>
                            <p>
                                The Board is also mandated to verify that engineering professional services and works are undertaken by persons registered under the Act as well as ensure that standards and professional ethics for health and safety of the public are observed. The members of the Board were appointed to office on 24th October, 2016 by the CS Ministry of Education.
                            </p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Facts;
