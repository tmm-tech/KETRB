import React from "react";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import "./act.css";

const RenewalPage = () => {
  return (
    <>
      <TopBar />
      <div className="pdf-container">
        <h1 className="pdf-title">Engineering Technology Application and Renewals Application</h1>
        <div className="iframe-container">
          <iframe
            src="/application and renewals_requirements_for_the_website.pdf"
            title="PDF Viewer"
            frameBorder="0"
            className="responsive-iframe"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RenewalPage;