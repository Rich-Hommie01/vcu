// StepTwo.js
import React from 'react';

const StepTwo = ({ formData, handleChange, errors, handleNextStep, handlePreviousStep }) => {
  return (
    <div className="form-step">
      <h2>Step 2: Name & Address</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error-message">{errors.name}</p>}

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      {errors.address && <p className="error-message">{errors.address}</p>}

      <button onClick={handlePreviousStep}>Previous</button>
      <button onClick={handleNextStep}>Next</button>
    </div>
  );
};

export default StepTwo;
