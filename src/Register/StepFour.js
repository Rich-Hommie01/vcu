// StepFour.js
import React from 'react';

const StepFour = ({ formData, handleChange, errors, handleNextStep, handlePreviousStep }) => {
  return (
    <div className="form-step">
      <h2>Step 4: SSN & Phone Number</h2>
      <input
        type="text"
        name="ssn"
        placeholder="Social Security Number (SSN)"
        value={formData.ssn}
        onChange={handleChange}
      />
      {errors.ssn && <p className="error-message">{errors.ssn}</p>}

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="error-message">{errors.phone}</p>}

      <button onClick={handlePreviousStep}>Previous</button>
      <button onClick={handleNextStep}>Next</button>
    </div>
  );
};

export default StepFour;
