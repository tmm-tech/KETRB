import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./news.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import { Alert, AlertDescription, AlertTitle } from "../Component/alert";

const News = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch("https://ketrb-backend.onrender.com/news/news/");
      if (!response.ok) {
        throw new Error("Failed to fetch news posts");
      }
      const data = await response.json();
      setNews(data);
    } catch (error) { 
      setAlertType("error");
      console.error("Error fetching news:", error);
      setAlertMessage("Failed to load news. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  const truncateDescription = (description, length) => {
    if (description.length > length) {
      return description.substring(0, length) + "...";
    }
    return description;
  };

  const sortedArticles = news.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));

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
        <h2 className="news-title">News</h2>
        <div className="news-list">
          {sortedArticles.map((article, index) => (
            <div key={index} className="news-item">
              <img src={article.imageUrl || "https://via.placeholder.com/150"} alt={article.title} className="news-image" />
              <div className="news-content">
                <h3 className="news-item-title">{article.title}</h3>
                <p className="news-date">Published on: {new Date(article.published_date).toLocaleDateString()}</p>
                <p className="news-description"> {truncateDescription(article.content, 100)}</p>
                <Link to={`/news&events/${article.id}`} className="news-link">Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
