import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from '../HomePage/Navbar';
import ProgressBar from './ProgressBar';
import './Register.scss'; // For SCSS styling

const Register = () => {
  const [step, setStep] = useState(0);
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    dob: "",
    phone: "+1",
  });

  const [showFinalContent, setShowFinalContent] = useState(false);
  const navigate = useNavigate();

   // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   // Handle phone input changes
   const handlePhoneInputChange = (e) => {
    const { value } = e.target;

    // Ensure the value starts with +1
    let newValue = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters

    if (newValue.length > 1 && newValue.startsWith("1")) {
      newValue = "+" + newValue;
    }

    // Preserve the +1 prefix in formData
    if (newValue.startsWith("+1")) {
      newValue = "+1" + newValue.substring(2); // Ensure the +1 stays in place
    } else {
      newValue = "+1" + newValue; // Add +1 if not present
    }

    setFormData({ ...formData, phone: newValue });
  };


  // Move to the next step
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Step-specific text for the progress bar
  const stepText = {
    1: "Please provide your personal details",
    2: "Enter your address and date of birth",
    3: "Verify your phone number with the OTP",
    4: "Review and submit your information",
  };

  // OTP Verification
  const handleOtpVerification = async () => {
    try {
      await axios.post("/api/verify-otp", { otp, phone: formData.phone });
      nextStep();
    } catch (error) {
      console.error("OTP Verification failed:", error);
    }
  };

  // Final form submission
  const handleSubmit = async () => {
    try {
      await axios.post("/api/submit-form", formData);
      setShowFinalContent(true);
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  const totalSteps = 4; // Total form steps

  return (
    <>
      <Navbar  className="nav-container" />
      <div className="form-container">
      {/* Conditionally render ProgressBar only during form steps (1 to 4) */}
      {step > 0 && step <= totalSteps && (
        <ProgressBar step={step} totalSteps={4} stepText={stepText[step]} />
      )}

      {/* Introductory content (no progress bar) */}
      {step === 0 && (
        <div>
          <h2>Let's open your VFCU Private Client Checking℠ account</h2>
          <div>
            <p>Before you start, you'll need your:</p>
            <ul>
              <li>Social Security number</li>
              <li>Driver's license or state ID</li>
            </ul>
            <p>You can only open individual accounts online. To add a joint owner, schedule a meeting to talk with a VFCU banker in person</p>
          </div>
          <h2>Are you an existing VFCU customer?</h2>
          <p>You're a VFCU customer if you have a VFCU checking or savings account, credit card (including partner cards), mortgage, auto financing or investments or if you have a VFCU username and password. Sign in for faster, prefilled application.</p>
          <button onClick={() => navigate("/login")}>Yes, sign in now</button>
          <button onClick={nextStep}>Start Registration</button>
          <div>
            <h2>Disclosure</h2>
            <p>We're required by law to ask your name , address, date of birth and other information to help us identify you.</p>
          </div>
        </div>
      )}

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <h3>Personal Details</h3>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="middlename"
            placeholder="Middle Name (Optional)"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
           <div style={{ position: 'relative' }}>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone} // Display the full value including +1
              onChange={handlePhoneInputChange}
              style={{ paddingLeft: '0.5em' }}
            />
          </div>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {/* Step 2: OTP Verification */}
      {step === 2 && (
        

<div>
<h3>Step 3: OTP Verification</h3>
<p>We have sent an OTP to your phone number: {formData.phone}</p>
<input
  type="text"
  name="otp"
  placeholder="Enter OTP"
  value={otp}
  onChange={(e) => setOtp(e.target.value)}
/>
<button onClick={prevStep}>Back</button>
<button onClick={handleOtpVerification}>Verify OTP</button>
</div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div>
        <h3>Step 2: Address & DOB</h3>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
        />
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
      )}

      {/* Step 4: Final Form Content */}
      {step === 4 && (
        <div>
          <h3>Final Step: Review & Submit</h3>
          <p>Please review your details before submitting.</p>
          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {/* Final content after submission */}
      {showFinalContent && (
        <div>
          <h2>Form Submitted</h2>
          <p>Thank you for registering!</p>
        </div>
      )}
      </div>
    </>
  );
};

export default Register;
