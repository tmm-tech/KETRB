import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./Page/HomePage";
import About from "./Page/About";
import News from "./Page/News";
import FAQ from "./Page/FAQ";
import Contact from "./Page/Contact";
import OurMandate from "./Page/MandatePage";
import Leadership from "./Page/Leadership";
import Gallery from "./Page/Gallery";
import Programs from "./Page/Programs";
import Application from "./Page/Application";
import Charter from "./Page/Charter";
import ActPage from "./Page/Act";
import NewsDetails from "./Page/NewsDetails";
import TenderPage from "./Page/Tender";
import news1 from "./Asset/News/IMG_3467.jpeg";
import news2 from "./Asset/News/IMG_3468.jpeg";
import news3 from "./Asset/Carousel/city.jpeg";
import news4 from "./Asset/Carousel/lady2.jpeg";
import news5 from "./Asset/Carousel/man.jpeg";
import news6 from "./Asset/Carousel/lady&man.jpg";
function App() {
  const newsArticles = [
    {
      id:"1",
      image: news6,
      title: "Latest Technology Trends in 2024",
      description: "Explore the newest advancements in technology, including AI, blockchain, and more.",
      link: "#",
      date: "2024-08-08",
    },
    {
      id:"2",
      image: news3,
      title: "How ketrb is Transforming Digital Assistance",
      description: "ketrb is making waves in the digital assistant space with its innovative features and user-friendly design.",
      link: "#",
      date: "2024-08-10",
    },
    {
      id:"3",
      image: news4,
      title: "The Future of Remote Work",
      description: "As remote work becomes the norm, discover how businesses are adapting and what it means for employees.",
      link: "#",
      date: "2024-08-09",
    },
    {
      id:"4",
      image: news5,
      title: "The Future of Remote Work",
      description: "As remote work becomes the norm, discover how businesses are adapting and what it means for employees.",
      link: "#",
      date: "2024-08-09",
    },
    {
      id:"5",
      image: news1,
      title: "Forging the Future: KETRB Partners with KIPPRA to Develop a Strategic Plan for Kenya's Engineering Technology Industry",
      description: "We are thrilled to announce our new partnership with the Kenya Institute for Public Policy Research and Analysis (KIPPRA). This collaboration marks a significant milestone as we work together to craft a comprehensive strategic plan that will propel innovation and growth in Kenya's engineering technology sector. Our joint efforts aim to drive advancements, foster development, and shape the future of the industry in Kenya.",
      link: "#",
      date: "2024-08-13",
    },
    {
      id:"6",
      image: news2,
      title: "KETRB Board Visits Strathmore: Strengthening Ties and Exploring New Horizons in Education and Innovation",
      description: "Our board recently had the honor of visiting Strathmore University, where we engaged in insightful discussions and explored new opportunities for collaboration. The visit underscored our commitment to enhancing educational partnerships and fostering innovation. By strengthening our ties with leading educational institutions, we aim to advance our shared goals and contribute to the growth and development of the technology sector.",
      link: "#",
      date: "2024-08-12",
    },
    
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/news&events" element={<News articles={newsArticles} />} />
        <Route path="/news&events/:id" element={<NewsDetails articles={newsArticles} />} />
        <Route path="/programs" element={<Programs/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/our-mandate" element={<OurMandate/>} />
        <Route path="/leadership" element={<Leadership/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/application" element={<Application/>} />
        <Route path="/charter" element={<Charter/>} />
        <Route path="/act" element={<ActPage/>} />
        <Route path="/tender" element={<TenderPage/>} />
      </Routes>
    </div>
  );
}

export default App;
