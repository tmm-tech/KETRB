import { Route, Routes } from "react-router-dom";
import React from "react";
import LoginPage from "./Page/LoginPage";
import HomePage from "./Page/HomePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
