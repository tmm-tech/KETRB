import React, { useState, useEffect } from "react";
import "./leadership.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import leader1 from "../Asset/Leaders/ALICE.png";
import leader2 from "../Asset/Leaders/chore.jpeg";
import leader3 from "../Asset/Leaders/linda.jpeg";
import leader4 from "../Asset/Leaders/ohande.jpeg";
import leader5 from "../Asset/Leaders/peter_nganga_kariuki.jpeg";
import leader6 from "../Asset/Leaders/samuel_muthondu.jpeg";
import leader7 from "../Asset/Leaders/temoet.jpeg";
import leader8 from "../Asset/Leaders/THUMBI.png";

const leadershipData = [
  {
    image: leader7,
    name: "mr nicholas kipruto temoet",
    description: "board chairman",
  },
  {
    image: leader1,
    name: "mrs alice mutai",
    description: "ceo",
  },
  {
    image: leader4,
    name: "mr fred n. oanda",
    description: "board member",
  },
  {
    image: leader5,
    name: "mr peter n. kariuki",
    description: "board member",
  },
  {
    image: leader3,
    name: "mrs linda a. wekhoba",
    description: "board member",
  },
  {
    image: leader8,
    name: "prof george thumbi",
    description: "board member",
  },
  {
    image: leader2,
    name: "mr charles c. majani",
    description: "board member",
  },
  {
    image: leader6,
    name: "mr samuel muthondu",
    description: "board member",
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
      <div style={{ paddingTop: "170px" }} className="leadership">
        <h1 className="leadership-title">Our Leadership Team</h1>
        <div className="leadership-container">
          <div className="leadership-hierarchy-line"></div>

          {/* Chairman Row */}
          <div className="leadership-row chairman">
            <div className="leadership-card">
              <img
                src={leader7}
                alt="MR NICHOLAS KIPRUTO TEMOET"
                className="leadership-image"
              />
              <h2 className="leadership-name">mr nicholas kipruto temoet</h2>
              <p className="leadership-description">BOARD CHAIRMAN</p>
            </div>
          </div>

          {/* Members Row */}
          <div className="leadership-row members">
            {leadershipData.slice(2, 8).map((leader, index) => (
              <div key={index} className="leadership-card">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="leadership-image"
                />
                <h2 className="leadership-name">{leader.name}</h2>
                <p className="leadership-description">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>

          {/* CEO Row */}
          <div className="leadership-row ceo">
            <div className="leadership-card">
              <img
                src={leader1}
                alt="MS ALICE MUTAI"
                className="leadership-image"
              />
              <h2 className="leadership-name">mrs alice mutai</h2>
              <p className="leadership-description">CEO</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Leadership;
