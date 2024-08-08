import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../Asset/Logo/ketrbl.jpeg";

function LoginPage() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <div className="body_login">
      <div className="background"></div>
      <div
        className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
      >
        <div className="form-container sign-up-container">
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
          <form action="">
            <h1>Create Account</h1>
            <span>use your company email for registration</span>
            <br />
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <br />
            <button>Sign Up</button>
          </form>
        </div>
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
            <div className="overlay-panel overlay-left">
              <div className="logo-container">
                <img className="company-logo" src={logo} alt="Company Logo" />
              </div>

              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <div className="logo-container">
                <img className="company-logo" src={logo} alt="Company Logo" />
              </div>

              <h1>Hello, Friend!</h1>
              <p>Enter your details and start the journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
