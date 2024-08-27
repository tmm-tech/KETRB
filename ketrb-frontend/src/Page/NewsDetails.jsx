import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./newsdetails.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";

const NewsDetail = ({ articles }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const article = articles.find((_, index) => index === parseInt(id));

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    loadData();
  }, []);

  if (!article) {
    return <div>Article not found</div>;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <TopBar />
      <div className="news-detail-container">
        <h2 className="news-detail-title">{article.title}</h2>
        <img src={article.image} alt={article.title} className="news-detail-image" />
        <p className="news-detail-date">Published on: {new Date(article.date).toLocaleDateString()}</p>
        <p className="news-detail-description">{article.description}</p>
      </div>
      <Footer />
    </>
  );
};

export default NewsDetail;