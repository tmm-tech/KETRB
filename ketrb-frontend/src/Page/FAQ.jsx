import React, { useState, useEffect } from "react";
import './faq.css';
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
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
  const faqs = [
    {
      question: 'What is ketrb?',
      answer: 'ketrb is a personal assistant platform designed to simplify your daily tasks and enhance productivity.'
    },
    {
      question: 'How do I use ketrb?',
      answer: 'You can use ketrb by creating an account, logging in, and interacting with the assistant through voice or text commands.'
    },
    {
      question: 'Is my data secure with ketrb?',
      answer: 'Yes, ketrb prioritizes your data security with advanced encryption and secure storage solutions.'
    }
    // Add more FAQs as needed
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <TopBar/>
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>▼</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FAQ;
