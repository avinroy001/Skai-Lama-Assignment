import React, { useState } from "react";
import "./Landing.css";
import Logo from "../Assets/QuesLogo 1.png";
import SoloLogo from "../Assets/Group 22.png";
const Landing = () => {
  const [signUp, setSignUp] = useState(false);
  console.log(signUp);
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
            <form className="form">
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
            </form>
            <button type="submit">Sign Up</button>

            <div className="create-account">
              <span>Already have an account? </span>
              <span onClick={() => setSignUp(false)} className="create-link">
                Login
              </span>
            </div>
          </>
        ) : (
          <>
            <form className="form">
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <div>
                <div className="checkBox">
                  <input type="checkbox" />
                  Remember me
                </div>
                <p>Forgot password?</p>
              </div>
            </form>
            <button type="submit">Login</button>

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
