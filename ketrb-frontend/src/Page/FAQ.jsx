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
        question: 'How to Create an Account?',
        answer: `a)Click the link https://portal.ketrb.go.ke:81. 
        b)In the landing page, click sign in. On creating an account.
        c)Select whether you want to register as an individual, consulting firm, or training institution.
        d)Fill in the required fields and accept terms and conditions.`
    },
    {
        question: 'First Time Application?',
        answer: `1. Application:
            a) Log in to your account.
            b) In the dashboard, click New Registration.
            c) Follow the 9 steps to fill your profile and save each step to proceed.
            d) Submit your application and make payment.

            2. Making Payment:
            After submitting your application:
            i. Click the link in the invoice, you will be prompted to put your M-Pesa pin or follow the mode of payment as directed to make the payment via eCitizen.
            ii. Follow step 6 and check the status of your payment, then click PAY NOW.`
    },
    {
        question: 'Is my data secure with KETRB?',
        answer: 'Yes, KETRB prioritizes your data security with advanced encryption and secure storage solutions.'
    },
    {
        question: 'CHECKING PROGRESS OF YOUR APPLICATION?',
        answer: `a) On the dashboard, click My Application.
        b) You will be able to check the status of your application, payment status, and review status.
        c) If pending with an issue, click EDIT to correct the issue.
        d) Submit your application for review.`
    },
    {
        question: 'LICENSE RENEWAL (Professional Category)',
        answer: `a) Login by clicking the link https://portal.ketrb.go.ke:81.
        b) On the dashboard, click LICENSE RENEWAL.
        c) Update your profile and submit if not up to date.
        d) Make payment.
        e) Click My Payment Transaction to get the payment receipt.
        f) Click My Certificate/License/ID to get the license.`
    },
    {
        question: 'MEMBERSHIP CATEGORY Charges',
        answer: `
        Candidate Engineering (Artisan) - KSH 100
        Certified Engineering (Artisan) - KSH 100
        Candidate Technician (Craft) - KSH 100
        Certified Engineering (Craft) - KSH 100
        Candidate Engineering (Technician) - KSH 500
        Certified Engineering (Technician) - KSH 2,000
        Professional Engineering (Technologist) - KSH 2,000
        Candidate Engineering (Technologist) - KSH 2,000
        Certified Engineering (Technologist) - KSH 2,000
        Consulting Engineering (Consulting Firm) - KSH 5,000`
    }
];

const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
};

return (
    <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
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
);
};

export default FAQs;