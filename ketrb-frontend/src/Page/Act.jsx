import React from "react";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import "./act.css";

const ActPage = () => {
  return (
    <>
      <TopBar />
      <div className="pdf-container">
        <h1 className="pdf-title">KETRB Act</h1>
        <div className="iframe-container">
          <iframe
            src="/Engineering_Act.pdf"
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

export default ActPage;
