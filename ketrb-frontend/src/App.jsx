import { Route, Routes } from "react-router-dom";
import React from "react";
import LoginPage from "./Page/LoginPage";
import HomePage from "./Page/HomePage";
import About from "./Page/About";
import News from "./Page/News";
import FAQ from "./Page/FAQ";
import Contact from "./Page/Contact";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/news&events" element={<News/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
