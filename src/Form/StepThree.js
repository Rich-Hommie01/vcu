import React from 'react';

const StepThree = ({ formData, handleChange, handleBlur, errors, touched }) => {
  return (
    <div className="row">
      <div className="field-container">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.username && errors.username ? 'input-error' : ''}
        />
        {touched.username && errors.username && <p className="error-message">{errors.username}</p>}
      </div>

      <div className="field-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.password && errors.password ? 'input-error' : ''}
        />
        {touched.password && errors.password && <p className="error-message">{errors.password}</p>}
      </div>

      <div className="field-container">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={touched.phone && errors.phone ? 'input-error' : ''}
        />
        {touched.phone && errors.phone && <p className="error-message">{errors.phone}</p>}
      </div>
    </div>
  );
};

export default StepThree;
