import React, { useState, useEffect } from "react";
import "./mandate.css";
import {
  FaCertificate,
  FaLink,
  FaHouseDamage,
  FaList,
  FaThumbsUp,
  FaEdit,
  FaBook,
  FaComments,
  FaHashtag,
  FaMoneyCheck,
} from "react-icons/fa";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
const OurMandate = () => {
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
      <div style={{ paddingTop: '230px' }} className="our-mandate">
        <h1 id="page-title">Our Mandate</h1>
        <main>
          <div className="mandate-container">
            <div className="mandate-item">
              <FaCertificate className="mandate-icon" />
              <p>
                Issue licenses to qualified persons under the provisions of the
                Act
              </p>
            </div>
            <div className="mandate-item">
              <FaLink className="mandate-icon" />
              <p>
                Take disciplinary measures in accordance with the provisions of
                The Act
              </p>
            </div>
            <div className="mandate-item">
              <FaHouseDamage className="mandate-icon" />
              <p>
                Enter and inspect sites where Construction, Installation,
                Erection, Alteration, Renovation, Maintenance, Processing or
                Manufacturing works are being carried out
              </p>
            </div>
            <div className="mandate-item">
              <FaList className="mandate-icon" />
              <p>
                Recommend the suspension of any Engineering Technology
                Professional Services, Works, Projects, Installation process, or
                any other Engineering Technology works that do not meet
                standards
              </p>
            </div>
            <div className="mandate-item">
              <FaThumbsUp className="mandate-icon" />
              <p>
                Assess, approve, or reject engineering technology qualifications
                of foreign persons intending to offer engineering technology
                professional services or works in Kenya
              </p>
            </div>
            <div className="mandate-item">
              <FaEdit className="mandate-icon" />
              <p>
                Enter and inspect business premises for verification purposes or
                to monitor works, services, and goods rendered by Professional
                Engineering Technologists
              </p>
            </div>
            <div className="mandate-item">
              <FaBook className="mandate-icon" />
              <p>
                Set standards for Engineering Technologists in Management,
                Marketing, Professional Ethics, Environmental Issues, Safety,
                Legal matters, and other relevant fields
              </p>
            </div>
            <div className="mandate-item">
              <FaComments className="mandate-icon" />
              <p>
                Collaborate with Engineering Technology Training Institutions,
                Professional Associations, and other relevant bodies in matters
                relating to Training and Professional Development of Engineering
                Technologists
              </p>
            </div>
            <div className="mandate-item">
              <FaHashtag className="mandate-icon" />
              <p>
                Plan, arrange, coordinate, and oversee professional training and
                facilitate internship of Engineering Technologists
              </p>
            </div>
            <div className="mandate-item">
              <FaMoneyCheck className="mandate-icon" />
              <p>
                Determine the fees to be charged by Engineering Technologists
                and firms for Professional services rendered from time to time
              </p>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default OurMandate;
