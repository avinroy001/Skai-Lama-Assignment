import React, { useState } from "react";
import axios from "axios";
import "./Landing.css";
import Logo from "../Assets/QuesLogo 1.png";
import SoloLogo from "../Assets/Group 22.png";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const nav=useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await axios.post("https://skai-lama-assignment-0m1m.onrender.com/api/auth/register", {
        email,
        password,
        confirmPassword,
      });
      alert(res.data.message);
      setSignUp(false); 
    
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || "Registration failed");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://skai-lama-assignment-0m1m.onrender.com/api/auth/login", {
        email,
        password,
      });
      alert(res.data.message);
      localStorage.setItem("token", res.data.token); 
      localStorage.setItem("email", email);
      nav("/HomePage");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="containerParent">
      <div className="leftPart">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="textLeftFirst">
          <p>Your podcast will no longer be just a hobby.</p>
        </div>
        <div className="textLeftSecond">
          <p>Supercharge Your Distribution using our AI assistant!</p>
        </div>
      </div>
      <div className="rightPart">
        <div>
          <img src={SoloLogo} alt="only logo" />
        </div>
        <div className="logoTxt">
          <p>
            Welcome to
            <br /> <strong>Ques.AI</strong>
          </p>
        </div>

        {signUp ? (
          <>
            <form className="form" onSubmit={handleRegister}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit">Sign Up</button>
            </form>

            <div className="create-account">
              <span>Already have an account? </span>
              <span onClick={() => setSignUp(false)} className="create-link">
                Login
              </span>
            </div>
          </>
        ) : (
          <>
            <form className="form" onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div>
                <div className="checkBox">
                  <input type="checkbox" />
                  Remember me
                </div>
                <p>Forgot password?</p>
              </div>
              <button type="submit">Login</button>
            </form>

            <div className="separator">
              <div className="line"></div>
              <span className="text">or</span>
              <div className="line"></div>
            </div>

            <div className="create-account">
              <span>Don't have an account? </span>
              <span onClick={() => setSignUp(true)} className="create-link">
                Create Account
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Landing;
