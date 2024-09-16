// StepFive.js
import React from 'react';

const StepFive = ({ formData, handleChange, errors, handleSubmit, handlePreviousStep, isLoading }) => {
  return (
    <div className="form-step">
      <h2>Step 5: Email</h2>   
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error-message">{errors.email}</p>}

      <button onClick={handlePreviousStep}>Previous</button>
      <button 
        onClick={handleSubmit} 
        disabled={isLoading}
        className={isLoading ? 'loading' : ''}
      >
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          'Submit'
        )}
      </button>
    </div>
  );
};

export default StepFive;
