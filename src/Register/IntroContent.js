import React from "react";
import { useNavigate } from "react-router-dom";
import './Register.scss';

const IntroContent = ({ onStart }) => {
  const navigate = useNavigate();

  return (
    <div className="intro-content">
            <h2>Let's open your VFCU Private Client Checking℠ account</h2>
            <div>
              <p>Before you start, you'll need your:</p>
              <ul>
                <li>Social Security number</li>
                <li>Driver's license or state ID</li>
              </ul>
              <p>You can only open individual accounts online. To add a joint owner, schedule a meeting to talk with a VFCU banker in person.</p>
            </div>
            <h2>Are you an existing VFCU customer?</h2>
            <p>If you're a VFCU customer, sign in for faster, prefilled application.</p>
            <button className="start-registration-button" onClick={onStart}>Start Registration</button>
      <button className="back-to-login" onClick={() => navigate("/login")}>Back to Login</button>
    </div>
  );
};

export default IntroContent;