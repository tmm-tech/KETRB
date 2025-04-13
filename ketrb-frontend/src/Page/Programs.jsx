import React, { useState, useEffect } from "react";
import './programs.css';
import TopBar from '../Component/Topbar';
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import { Alert, AlertDescription, AlertTitle } from "../Component/alert";


const Programs = () => {
  const [loading, setLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [programs, setPrograms] = useState([]);
  const [alertType, setAlertType] = useState("success");
  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await fetch("https://ketrb-backend.onrender.com/programs/programs/");
      if (!response.ok) {
        throw new Error("Failed to fetch project posts");
      }
      const data = await response.json();
      setPrograms(data);
    } catch (error) {
      setAlertType("error");
      console.error("Error fetching projects:", error);
      setAlertMessage("Failed to load projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <TopBar />
      {alertMessage && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Alert
            className={`max-w-md mx-auto mt-4 ${alertType === "error" ? "bg-red-100 border-red-500" : "bg-green-100 border-green-500"}`}
          >
            <AlertTitle>{alertType === "error" ? "Error" : "Success"}</AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        </div>
      )}
      <div style={{ paddingTop: '30px' }} className="news-container">
        <h2 className="news-title">Projects</h2>
        <div className="news-list">
          {programs.map((program, index) => (
            <div key={program.id} className="news-item">
              <img src={program.imageUrl} alt={program.title} className="news-image" />
              <div className="news-content">
                <h3 className="news-item-title">{program.title}</h3>
                {/*<p className="news-date">Published on: {new Date(program.date).toLocaleDateString()}</p>*/}
                <p className="news-description">{program.content}</p>
                {/*<a href={program.link} className="news-link">Read more</a>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Programs;
