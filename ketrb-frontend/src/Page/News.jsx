import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./news.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";

const News = ({ articles }) => {
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

  const truncateDescription = (description, length) => {
    if (description.length > length) {
      return description.substring(0, length) + "...";
    }
    return description;
  };

  const sortedArticles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <TopBar />
      <div style={{ paddingTop: '30px' }} className="news-container">
        <h2 className="news-title">Latest News</h2>
        <div className="news-list">
          {sortedArticles.map((article, index) => (
            <div key={index} className="news-item">
              <img src={article.image} alt={article.title} className="news-image" />
              <div className="news-content">
                <h3 className="news-item-title">{article.title}</h3>
                <p className="news-date">Published on: {new Date(article.date).toLocaleDateString()}</p>
                <p className="news-description"> {truncateDescription(article.description, 100)}</p>
                <Link to={`/news&events/${index}`} className="news-link">Read more</Link>
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
