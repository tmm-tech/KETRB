import React, { useState, useEffect } from "react";
import './programs.css';
import TopBar from '../Component/Topbar';
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";
import kengen from '../Asset/programs/kengen.png';
import ndur from '../Asset/programs/NdurumoTech.png';
import rvist from '../Asset/programs/RVIST.png';
import solarDryer from '../Asset/programs/SolarGrainDryer.png';
import irrigationSys from '../Asset/programs/irrigationSys.png';

const programs = [
  {
    image: kengen,
    title: "OLKARIA 1AU 140 MW",
    description: "OLKARIA IAU is part of Kenya's geothermal power generation complex located in the Olkaria geothermal field, near Naivasha in the Rift Valley. It is a geothermal power plant that generates electricity by harnessing the heat from underground steam reservoirs. This provides power to homes, businesses and industries across Kenya hence a significant contribution to Kenya’s renewable energy.",
    link: "#",
    date: "2024-08-08",
  },
  {
    image: ndur,
    title: "NDURURUMO TECHNOLOGIES",
    description: "Ndururumo Technologies is a leading supplier of water and energy-related equipment within Naivasha and its environs. They provide equipment and systems for water pumping, storage, and treatment, helping communities and businesses access clean water.",
    link: "#",
    date: "2024-08-08",
  },
  {
    image: solarDryer,
    title: "SOLAR GRAIN DRYER",
    description: "A solar grain dryer utilizes the sun's energy to dry harvested grains. This process involves capturing solar heat to dehydrate the grains, reducing their moisture content and preventing spoilage.",
    link: "#",
    date: "2024-08-08",
  },
  {
    image: rvist,
    title: "SMOKE DETECTOR ALARM",
    description: "Rift Valley Institute of Science and Technology (RVIST) developed a smoke detector system.\n A smoke detector system is designed to detect the presence of smoke in the air, which is a common indicator of fire. It is therefore designed to protect households, office premises and industries against fire. (Developed by Rift Valley Institute of Science and Technology)",
    link: "#",
    date: "2024-08-08",
  },
  {
    image: irrigationSys,
    title: "AUTOMATIC IRRIGATION SYSTEM",
    description: "An automatic irrigation system is a technology that controls the watering of plants without manual intervention. It uses sensors, timers, or computer programs to determine when and how much water to apply to crops or landscapes. (Developed by Rift Valley Institute of Science and Technology)",
    link: "#",
    date: "2024-08-08",
  },
]

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
      <div style={{ paddingTop: '210px' }} className="news-container">
        <h2 className="news-title">Programs</h2>
        <div className="news-list">
          {programs.map((program, index) => (
            <div key={index} className="news-item">
              <img src={program.image} alt={program.title} className="news-image" />
              <div className="news-content">
                <h3 className="news-item-title">{program.title}</h3>
                {/*<p className="news-date">Published on: {new Date(program.date).toLocaleDateString()}</p>*/}
                <p className="news-description">{program.description}</p>
                {/*<a href={program.link} className="news-link">Read more</a>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Programs;
