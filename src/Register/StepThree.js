// StepThree.js
import React from 'react';

const StepThree = ({ formData, handleChange, errors, handleNextStep, handlePreviousStep }) => {
  return (
    <div className="form-step">
      <h2>Step 3: Date of Birth</h2>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      {errors.dob && <p className="error-message">{errors.dob}</p>}

      <button onClick={handlePreviousStep}>Previous</button>
      <button onClick={handleNextStep}>Next</button>
    </div>
  );
};

export default StepThree;
