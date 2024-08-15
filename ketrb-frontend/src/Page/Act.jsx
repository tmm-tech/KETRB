import React, { useState, useEffect } from "react";
import "./act.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";

const ActPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return <Loading/>;
  }
  return (
    <>
      <TopBar />
      <div style={{ paddingTop: '170px' }} className="act-page-container">
        <h1 className="act-page-title">KETRB ACT</h1>
        <div className="pdf-container">
          <iframe
            src="/Engineering_Act.pdf"
            title="Act Document"
            className="pdf-viewer"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ActPage;
