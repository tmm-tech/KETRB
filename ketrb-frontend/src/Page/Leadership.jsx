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
    name: "MR NICHOLAS KIPRUTO TEMOET",
    description: "BOARD CHAIRMAN",
  },
  {
    image: leader1,
    name: "MS ALICE MUTAI",
    description: "CEO",
  },
  {
    image: leader4,
    name: "MR FRED NYAMBENE OANDA",
    description: "BOARD MEMBER",
  },
  {
    image: leader5,
    name: "MR PETER NG'ANG'A KARIUKI",
    description: "BOARD MEMBER",
  },
  {
    image: leader3,
    name: "MRS LINDA AYUKU WEKHOBA",
    description: "BOARD MEMBER",
  },
  {
    image: leader8,
    name: "PROF GEORGE MITHURI GITHAMBI",
    description: "BOARD MEMBER",
  },
  {
    image: leader2,
    name: "MR CHARLES CHORE MAJANI",
    description: "BOARD MEMBER",
  },
  {
    image: leader6,
    name: "MR SAMUEL MUTHONDU",
    description: "BOARD MEMBER",
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
              <h2 className="leadership-name">MR NICHOLAS KIPRUTO TEMOET</h2>
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
              <h2 className="leadership-name">MS ALICE MUTAI</h2>
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
