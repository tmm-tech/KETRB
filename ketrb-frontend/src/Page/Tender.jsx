import React, { useState, useEffect } from "react";
import './tender.css';
import TopBar from '../Component/Topbar';
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";

const TenderPage = () => {
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
    <TopBar/>
    <div style={{ paddingTop: '170px' }} className="coming-soon-container">
      <div className="animation-wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <h1 className="coming-soon-title">Something Exciting is Coming Soon!</h1>
      <p className="coming-soon-text">We are working hard to bring you the new Tender page. Stay tuned!</p>
      <a href="/" className="back-link">Go Back Home</a>
    </div>
    <Footer/>
    </>
  );
};

export default TenderPage;
