import React from "react";
import { useParams } from "react-router-dom";
import "./newsdetails.css";

const NewsDetail = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((article, index) => index === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="news-detail-container">
      <h2 className="news-detail-title">{article.title}</h2>
      <img src={article.image} alt={article.title} className="news-detail-image" />
      <p className="news-detail-date">Published on: {new Date(article.date).toLocaleDateString()}</p>
      <p className="news-detail-description">{article.description}</p>
    </div>
  );
};

export default NewsDetail;
