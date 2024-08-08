import React from 'react';
import './news.css';

const newsArticles = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Latest Technology Trends in 2024',
    description: 'Explore the newest advancements in technology, including AI, blockchain, and more.',
    link: '#'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'How ketrb is Transforming Digital Assistance',
    description: 'ketrb is making waves in the digital assistant space with its innovative features and user-friendly design.',
    link: '#'
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'The Future of Remote Work',
    description: 'As remote work becomes the norm, discover how businesses are adapting and what it means for employees.',
    link: '#'
  }
  // Add more news articles as needed
];

const News = () => {
  return (
    <div className="news-container">
      <h2 className="news-title">Latest News</h2>
      <div className="news-list">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-item">
            <img src={article.image} alt={article.title} className="news-image" />
            <div className="news-content">
              <h3 className="news-item-title">{article.title}</h3>
              <p className="news-description">{article.description}</p>
              <a href={article.link} className="news-link">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
