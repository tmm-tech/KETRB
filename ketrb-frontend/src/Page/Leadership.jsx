import React, { useState, useEffect } from "react";
import "./leadership.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";

const leadershipData = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/150",
    description:
      "John Doe is the CEO of the company with over 20 years of experience in the industry.",
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/150",
    description:
      "Jane Smith is the CFO who has been instrumental in driving the company’s financial strategy.",
  },
  {
    name: "Emily Johnson",
    image: "https://via.placeholder.com/150",
    description:
      "Emily Johnson is the CTO responsible for overseeing technological advancements.",
  },
];

const Leadership = () => {
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
  return (
    <>
      <TopBar />
      <div className="leadership">
        <h1 className="leadership-title">Our Leadership Team</h1>
        <div className="leadership-container">
          {leadershipData.map((leader, index) => (
            <div key={index} className="leadership-card">
              <img
                src={leader.image}
                alt={leader.name}
                className="leadership-image"
              />
              <h2 className="leadership-name">{leader.name}</h2>
              <p className="leadership-description">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Leadership;
