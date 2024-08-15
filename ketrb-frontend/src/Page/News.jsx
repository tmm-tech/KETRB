import React, { useState, useEffect } from "react";
import "./news.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import news1 from "../Asset/News/IMG_3467.jpeg";
import news2 from "../Asset/News/IMG_3468.jpeg";
import news3 from "../Asset/Carousel/city.jpeg";
import news4 from "../Asset/Carousel/lady2.jpeg";
import news5 from "../Asset/Carousel/man.jpeg";
import news6 from "../Asset/Carousel/lady&man.jpg";

const newsArticles = [
  {
    image: news6,
    title: "Latest Technology Trends in 2024",
    description: "Explore the newest advancements in technology, including AI, blockchain, and more.",
    link: "#",
    date: "2024-08-08",
  },
  {
    image: news3,
    title: "How ketrb is Transforming Digital Assistance",
    description: "ketrb is making waves in the digital assistant space with its innovative features and user-friendly design.",
    link: "#",
    date: "2024-08-10",
  },
  {
    image: news4,
    title: "The Future of Remote Work",
    description: "As remote work becomes the norm, discover how businesses are adapting and what it means for employees.",
    link: "#",
    date: "2024-08-09",
  },
  {
    image: news5,
    title: "The Future of Remote Work",
    description: "As remote work becomes the norm, discover how businesses are adapting and what it means for employees.",
    link: "#",
    date: "2024-08-09",
  },
  {
    image: news1,
    title: "Forging the Future: KETRB Partners with KIPPRA to Develop a Strategic Plan for Kenya's Engineering Technology Industry",
    description: "We are thrilled to announce our new partnership with the Kenya Institute for Public Policy Research and Analysis (KIPPRA). This collaboration marks a significant milestone as we work together to craft a comprehensive strategic plan that will propel innovation and growth in Kenya's engineering technology sector. Our joint efforts aim to drive advancements, foster development, and shape the future of the industry in Kenya.",
    link: "#",
    date: "2024-08-13",
  },
  {
    image: news2,
    title: "KETRB Board Visits Strathmore: Strengthening Ties and Exploring New Horizons in Education and Innovation",
    description: "Our board recently had the honor of visiting Strathmore University, where we engaged in insightful discussions and explored new opportunities for collaboration. The visit underscored our commitment to enhancing educational partnerships and fostering innovation. By strengthening our ties with leading educational institutions, we aim to advance our shared goals and contribute to the growth and development of the technology sector.",
    link: "#",
    date: "2024-08-12",
  },
  
];

const News = () => {
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


  const sortedArticles = newsArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <TopBar />
      <div style={{ paddingTop: '170px' }} className="news-container">
        <h2 className="news-title">Latest News</h2>
        <div className="news-list">
          {sortedArticles.map((article, index) => (
            <div key={index} className="news-item">
              <img src={article.image} alt={article.title} className="news-image" />
              <div className="news-content">
                <h3 className="news-item-title">{article.title}</h3>
                <p className="news-date">Published on: {new Date(article.date).toLocaleDateString()}</p>
                <p className="news-description">{article.description}</p>
                <a href={article.link} className="news-link">Read more</a>
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
