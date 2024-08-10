import React, { useState, useEffect } from "react";
import "./faq.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import { Link } from "react-router-dom";

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
      question: "How to Create an Account?",
      answer:<div>1. Click <Link to="https://portal.ketrb.go.ke:81"  target="_blank"><span style={{color:"blue"}}>here</span></Link><br />
        2. In the landing page, click sign in. On creating an account.<br />
        3. Select whether you want to register as an individual, consulting firm, or training institution.<br />
        4. Fill in the required fields and accept terms and conditions.<br /></div>
    },
    {
      question: <>First Time Application?</>,
      answer: <><strong>1. Application:</strong><br />
            <span style={{paddingLeft:"6px"}}>a. Log in to your account.</span> <br />
            <span style={{paddingLeft:"6px"}}>b. In the dashboard, click New Registration.</span><br />
            <span style={{paddingLeft:"6px"}}>c. Follow the 9 steps to fill your profile and save each step to proceed.</span><br />
            <span style={{paddingLeft:"6px"}}>d. Submit your application and make payment.</span><br />
      

            <strong>2. Making Payment:</strong><br />
            After submitting your application:<br />
            <span style={{paddingLeft:"6px"}}>i. Click the link in the invoice, you will be prompted to put your M-Pesa pin or follow the mode of payment as directed to make the payment via eCitizen.</span> <br />
            <span style={{paddingLeft:"6px"}}>ii. Follow step 6 and check the status of your payment, then click PAY NOW.</span> <br /></>,
    },
    {
      question: "Is my data secure with KETRB?",
      answer:
        "Yes, KETRB prioritizes your data security with advanced encryption and secure storage solutions.",
    },
    {
      question: "CHECKING PROGRESS OF YOUR APPLICATION?",
      answer: <>1. On the dashboard, click on My Application<br />
        2. You will be able to check the status of your application, payment status, and review status.<br />
        3. If pending with an issue, click EDIT to correct the issue.<br />
      4. Submit your application for review.<br /></>,
    },
    {
      question: "LICENSE RENEWAL (Professional Category)",
      answer: <>1. Login by clicking <Link to="https://portal.ketrb.go.ke:81"  target="_blank"><span style={{color:"blue"}}>here</span></Link><br />
        2. On the dashboard, click LICENSE RENEWAL.<br />
        3. Update your profile and submit if not up to date.<br />
        4. Make payment.<br />
        5. Click My Payment Transaction to get the payment receipt.<br />
        6. Click My Certificate/License/ID to get the license.<br /></>,
    },
    {
      question: "MEMBERSHIP CATEGORY Charges",
      answer: <>
        Candidate Engineering (Artisan) - KSH 100<br />
        Certified Engineering (Artisan) - KSH 100<br />
        Candidate Technician (Craft) - KSH 100<br />
        Certified Engineering (Craft) - KSH 100<br />
        Candidate Engineering (Technician) - KSH 500<br />
        Certified Engineering (Technician) - KSH 2,000<br />
        Professional Engineering (Technologist) - KSH 2,000<br />
        Candidate Engineering (Technologist) - KSH 2,000<br />
        Certified Engineering (Technologist) - KSH 2,000<br />
        Consulting Engineering (Consulting Firm) - KSH 5,000</>,
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <TopBar />
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
