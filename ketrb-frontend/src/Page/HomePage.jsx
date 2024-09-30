import React, { useState, useEffect } from "react";
import TopBar from "../Component/Topbar";
import Carousel from "../Component/Carousel";
import Footer from "../Component/Footer";
//import Facts from "../Component/Facts";
import HomeAbout from "../Component/HomeAbout";
import ApplySection from "../Component/ApplySection";
import Loading from "../Component/Loading";

function HomePage() {
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
    <div className="homepage">
      <TopBar />
      <Carousel />
      //<Facts />
      <ApplySection />
      <HomeAbout />
      <Footer />
    </div>
  );
}

export default HomePage;
