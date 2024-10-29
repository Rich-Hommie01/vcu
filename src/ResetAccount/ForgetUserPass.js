import React, { useState } from 'react';
import './ForgetUserPass.scss';
import Nav from '../components/Nav';
import { RiQuestionFill } from "react-icons/ri";
import { IoArrowBackCircleOutline, IoChevronForward } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ForgetUserPass = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    if (!formData.username || !formData.password) {
      setErrors({
        username: !formData.username ? 'Username is required' : '',
        password: !formData.password ? 'Security Code is required' : ''
      });
    } else {
      console.log('Form submitted:', formData);
    }
  };

  const handleBackToHome = () => {
    navigate('/'); 
  };

  return (
    <>
      <Nav className='forgetuser' />

      <div className='faquser'>
        <div className='left-side'>
          <p onClick={handleBackToHome} className='faqsExit exit'>
            <IoArrowBackCircleOutline /> Exit
          </p>

          <p className='faqsExit quest'>
            <RiQuestionFill /> Questions?
          </p>
          <p className='faqsExit'>
            Read our FAQs <IoChevronForward />
          </p>
        </div>

        <div className='right-side'>
        <h2>Identification</h2>

          <div className='identification'>
            <p>Let's confirm your identity</p>
            <p>If you're an authorized user, provide your email and the security code you use to confirm your identity when you call us. 
              Remember: We will never call and ask for your code.</p>
            <p>To reset your security code, please contact your admin.</p>
            <p>Commercial administrators must tell us a Tax ID number.</p>
          </div>

 
          <div className="form-authForm">
            
            <div className="username-input-container">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <p className="error-message">{errors.username}</p>}
            </div>

            <div className="password-input-container">
              <label>Security Code</label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="toggle-password-btn"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>

            <div>
              <button onClick={handleSubmit} className="Btn">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetUserPass;
