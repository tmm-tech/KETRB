import React from "react";
import "./loading.css"; // The CSS for your loading spinner

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="multi-circle-spinner">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
      </div>
      <h2>KETRB</h2>
      <p>Loading....</p>
    </div>
  );
};

export default Loading;
