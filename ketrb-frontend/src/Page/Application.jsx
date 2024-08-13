import React, { useState, useEffect } from "react";
import "./application.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
const Application = () => {
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
      <div className="application-requirements">
        <h1 className="title">Application Requirements</h1>

        <section className="section">
          <h2>APPLICATION FORMS SHOULD BE ACCOMPANIED BY:</h2>
          <ul>
            <li>Passport Photos</li>
            <li>Detailed C.V.</li>
            <li>Copy of I.D. Card</li>
            <li>IET membership No. / Application Status</li>
            <li>Education Certificates – (Certified Copies)</li>
          </ul>
        </section>

        <section className="section">
          <h2>CONSULTING FIRMS Requirements</h2>
          <ul>
            <li>Incorporation Certificate of firm.</li>
            <li>
              Minimum 51% of shares of firm to be held by Kenyan Citizen(s).
            </li>
            <li>
              At least one partner/director to be registered as a Consulting
              Eng. Technologist with valid license.
            </li>
            <li>Detailed C.V. of Partners of Directors.</li>
            <li>
              Written commitment allowing the Board to verify suitability of the
              firm for purposes of Registration.
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>CONSULTING ENGINEERING TECHNOLOGIST Requirements</h2>
          <ul>
            <li>
              Have at least five (5) years’ experience in your field of
              specialization as a Professional Eng. Technologist.
            </li>
            <li>
              Minimum Master’s degree from Recognized institution OR Relevant
              first degree coupled with outstanding contribution towards
              Engineering Technology.
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>PROFESSIONAL ENGINEERING TECHNOLOGIST Requirements</h2>
          <ul>
            <li>A registered Candidate Eng. Technologist.</li>
            <li>
              Have at least four (4) years’ experience in your field of
              specialization if holder of Higher National Diploma OR three (3)
              years’ experience in your field of specialization if holder of
              Degree.
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>CERTIFIED ENGINEERING TECHNICIAN Requirements</h2>
          <ul>
            <li>A registered Candidate Eng. Technician.</li>
            <li>
              Have at least two (2) years’ experience in your field of
              specialization.
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>CANDIDATE ENGINEERING TECHNOLOGIST Requirements</h2>
          <ul>
            <li>Higher National Diploma from recognized institution.</li>
            <li>Bachelor degree in Engineering Technology.</li>
            <li>Less than three (3) years’ experience.</li>
          </ul>
        </section>

        <section className="section">
          <h2>CANDIDATE ENGINEERING TECHNICIAN Requirements</h2>
          <ul>
            <li>Have at least a Diploma from recognized institution.</li>
            <li>Less than two (2) Years’ experience.</li>
          </ul>
        </section>

        <div className="apply-now-container">
          <Link to="https://portal.ketrb.go.ke:81">
            <button className="apply-now-button">Apply Now</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Application;
