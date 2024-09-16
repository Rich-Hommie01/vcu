// StepOne.js
import React from 'react';

const StepOne = ({ formData, handleChange, errors, handleNextStep }) => {
  return (
    <div className="form-step">
      <h2>Step 1: Username & Password</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      {errors.username && <p className="error-message">{errors.username}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error-message">{errors.password}</p>}

      <button onClick={handleNextStep}>Next</button>
    </div>
  );
};

export default StepOne;
