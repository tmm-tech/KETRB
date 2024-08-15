import React, { useState, useEffect } from "react";
import "./programs.css";
import TopBar from "../Component/Topbar";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import program1 from "../Asset/Carousel/engineer_group.webp";
import program2 from "../Asset/Carousel/lady2.jpeg";
import program3 from "../Asset/Carousel/man.jpeg";
import program4 from "../Asset/Carousel/lady&man.jpg";

const programsData = [
  {
    title: "Program One",
    description:
      "This is the description for Program One. It provides comprehensive details on the topic.",
    image: program1,
  },
  {
    title: "Program Two",
    description:
      "This is the description for Program Two. It includes various aspects of the subject matter.",
    image: program2,
  },
  {
    title: "Program Three",
    description:
      "This is the description for Program Three. Learn more about this program and its features.",
    image: program3,
  },
  {
    title: "Program Four",
    description:
      "This is the description for Program Four. Learn more about this program and its features.",
    image: program4,
  },
];

const Programs = () => {
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
      <div style={{ paddingTop: "170px" }} className="programs">
        <h1 className="programs-title">Our Programs</h1>
        <div className="programs-container">
          {programsData.map((program, index) => (
            <div key={index} className="program-card">
              <img
                src={program.image}
                alt={program.title}
                className="program-image"
              />
              <h2 className="program-title">{program.title}</h2>
              <p className="program-description">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Programs;
