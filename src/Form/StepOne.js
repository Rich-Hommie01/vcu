import React from 'react';

const StepOne = ({ formData = {}, handleChange, errors = {} }) => {
  return (
    <div className="step">
      <div className="row">
        <div className="field-container">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className={errors.firstName ? 'input-error' : ''}
          />
          {errors.firstName && <p className="errorMessage">{errors.firstName}</p>}
        </div>
        
        <div className="field-container">
          <label htmlFor="middleName">Middle Name (Optional)</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="Middle Name"
          />
        </div>

        <div className="field-container">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange} 
            placeholder="Last Name"
            className={errors.lastName ? 'input-error' : ''}
          />
          {errors.lastName && <p className="errorMessage">{errors.lastName}</p>}
        </div>

        <div className="field-container">
          <label htmlFor="ssn">SSN</label>
          <input
            type="password"
            id="ssn"
            name="ssn"
            value={formData.ssn}
            onChange={handleChange}
            placeholder="SSN"
            className={errors.ssn ? 'input-error' : ''}
          />
          {errors.ssn && <p className="errorMessage">{errors.ssn}</p>}
        </div>

        <div className="field-container">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className={errors.dob ? 'input-error' : ''}
          />
          {errors.dob && <p className="errorMessage">{errors.dob}</p>}
        </div>
      </div>
    </div>
  );
};

export default StepOne;
