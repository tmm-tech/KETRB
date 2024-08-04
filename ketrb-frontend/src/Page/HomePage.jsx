import React from 'react';
import TopBar from '../Component/Topbar';
import Carousel from '../Component/Carousel';
import Footer from '../Component/Footer';

function HomePage() {
  return (
    <div className="homepage">
      <TopBar />
      <Carousel />
      <Footer />
    </div>
  );
}

export default HomePage;
