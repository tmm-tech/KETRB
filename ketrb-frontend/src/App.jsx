import { Route, Routes } from "react-router-dom";
import React from "react";
import LoginPage from "./Page/LoginPage";
import HomePage from "./Page/HomePage";
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
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/news&events" element={<News/>} />
        <Route path="/programs" element={<Programs/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/our-mandate" element={<OurMandate/>} />
        <Route path="/leadership" element={<Leadership/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/application" element={<Application/>} />
        <Route path="/charter" element={<Charter/>} />
      </Routes>
    </div>
  );
}

export default App;
