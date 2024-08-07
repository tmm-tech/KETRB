import React from 'react';
import TopBar from '../Component/Topbar';
import Carousel from '../Component/Carousel';
import Footer from '../Component/Footer';
import Facts from '../Component/Facts';

function HomePage() {
  return (
    <div className="homepage">
      <TopBar />
      <Carousel />
      <Facts />
      <Footer />
    </div>
  );
}

export default HomePage;


