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
      <TopBar />
      <div className="tender-page-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="animation-wrapper flex justify-center items-center my-8">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
        </div>
        <h1 className="coming-soon-title text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Something Exciting is Coming Soon!
        </h1>
        <p className="coming-soon-text text-lg text-gray-600 mb-8 text-center">
          We are working hard to bring you the new Tender page. Stay tuned!
        </p>
        <a href="/" className="back-link text-indigo-600 hover:underline text-lg">
          Go Back Home
        </a>
      </div>
      <Footer />
    </>
  );
};

export default TenderPage;