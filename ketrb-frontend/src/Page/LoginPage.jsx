import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../Asset/Logo/ketrbl.jpeg"; // Ensure the path is correct
import Loading from "../Component/Loading";

function LoginPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
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

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="body_login">
      <div className="background"></div>
      <div className="lcontainer">
        <div className="form-container sign-in-container">
          <div className="back-icon">
            <Link to="/">
              <FaArrowLeft size={20} />
            </Link>
          </div>
          <div className="language-selector">
            <select value={selectedLanguage} onChange={handleLanguageChange}>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
          <form action="#">
            <h1>Sign In</h1>
            <span>use your account</span>
            <br />
            <input type="email" name="email" placeholder="Company Email" />
            <input type="password" name="password" placeholder="Password" />
            <Link to="#">Forgot Your Password</Link>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel">
              <img className="company-logo" src={logo} alt="Company Logo" />
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
