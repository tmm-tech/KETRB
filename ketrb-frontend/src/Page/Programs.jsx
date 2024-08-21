import React, { useState, useEffect } from "react";
import './programs.css';
import TopBar from '../Component/Topbar';
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";

const Programs = () => {
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
      <div className="program-page-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="animation-wrapper flex justify-center items-center my-8">
          <div className="circles circle6"></div>
          <div className="circles circle7"></div>
          <div className="circles circle8"></div>
        </div>
        <h1 className="coming-soon-title text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Something Exciting is Coming Soon!
        </h1>
        <p className="coming-soon-text text-lg text-gray-600 mb-8 text-center">
          We are working hard to bring you the new Programs page. Stay tuned!
        </p>
        <a href="/" className="back-link text-indigo-600 hover:underline text-lg">
          Go Back Home
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Programs;
