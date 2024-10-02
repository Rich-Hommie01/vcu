import React from 'react';

const StepOne = ({ formData, handleChange, handleBlur, touched, errors }) => {
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
            onBlur={handleBlur}
            placeholder="First Name"
            className={errors.firstName && touched.firstName ? 'input-error' : ''}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
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
            onBlur={handleBlur} 
            placeholder="Last Name"
            className={errors.lastName && touched.lastName ? 'input-error' : ''}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        <div className="field-container">
          <label htmlFor="ssn">SSN</label>
          <input
            type="password"
            id="ssn"
            name="ssn"
            value={formData.ssn}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="SSN"
            className={errors.ssn && touched.ssn ? 'input-error' : ''}
          />
          {errors.ssn && <p className="error">{errors.ssn}</p>}
        </div>

        <div className="field-container">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.dob && touched.dob ? 'input-error' : ''}
          />
          {errors.dob && <p className="error">{errors.dob}</p>}
        </div>
      </div>
    </div>
  );
};

export default StepOne;
