import React from 'react';
import './news.css';

const articles = [
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
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'The Rise of Smart Homes in 2024',
      description: 'Smart homes are becoming increasingly popular. Learn how they are changing the way we live.',
      link: '#'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Understanding Cybersecurity in the Modern Age',
      description: 'Cybersecurity is more crucial than ever. Get insights into how to protect your data in 2024.',
      link: '#'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Top 10 Gadgets to Watch in 2024',
      description: 'From wearables to smart appliances, these gadgets are set to make waves in 2024.',
      link: '#'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'How AI is Shaping the Future of Healthcare',
      description: 'AI is revolutionizing healthcare, offering new ways to diagnose and treat diseases.',
      link: '#'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Sustainability and Technology: A New Era',
      description: 'Technology is playing a key role in driving sustainability initiatives across the globe.',
      link: '#'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Digital Transformation in 2024: What to Expect',
      description: 'Businesses are undergoing rapid digital transformation. Here’s what to expect in the coming year.',
      link: '#'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'The Impact of 5G on Communication and Connectivity',
      description: '5G is here, and it’s changing the way we communicate and connect with the world.',
      link: '#'
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Advances in Augmented Reality',
      description: 'AR is no longer just for games. Discover its new applications in various industries.',
      link: '#'
    }
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
