import { Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./Page/HomePage";
import CareersPage from "./Page/Career";
import About from "./Page/About";
import News from "./Page/News";
import FAQ from "./Page/FAQ";
import Contact from "./Page/Contact";
import OurMandate from "./Page/MandatePage";
import Leadership from "./Page/Leadership";
import Gallery from "./Page/Gallery";
import Programs from "./Page/Programs";
import Application from "./Page/Application";
import Charter from "./Page/Charter";
import ActPage from "./Page/Act";
import NewsDetails from "./Page/NewsDetails";
import TenderPage from "./Page/Tender";
import CareerApplicationForm from "./Page/CareerApplicationForm";
import CareerApplicationSuccess from "./Page/CareerApplicationSuccess";
import Management from "./Page/Management";
import RenewalPage from "./Page/Renewal";
import CareerViewPage from "./Page/CareerView";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/careers" element={<CareersPage/>} />
        <Route path="/careerapplyform/:id" element={<CareerApplicationForm/>} />
        <Route path="/careerview/:id" element={<CareerViewPage/>} />
        <Route path="/careersuccess/:id" element={<CareerApplicationSuccess/>} />
        <Route path="/news&events" element={<News/>} />
        <Route path="/news&events/:id" element={<NewsDetails/>} />
        <Route path="/programs" element={<Programs/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/our-mandate" element={<OurMandate/>} />
        <Route path="/leadership" element={<Leadership/>} />
        <Route path="/management" element={<Management/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/application" element={<Application/>} />
        <Route path="/charter" element={<Charter/>} />
        <Route path="/renewal" element={<RenewalPage/>} />
        <Route path="/act" element={<ActPage/>} />
        <Route path="/tender" element={<TenderPage/>} />
      </Routes>
    </div>
  );
}

export default App;
