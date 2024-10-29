import React from 'react';

const StepThree = ({ formData = {}, handleChange, errors = {} }) => {
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
          className={errors.username ? 'input-error' : ''}
        />
        {errors.username && <p className="errorMessage">{errors.username}</p>}
      </div>

      <div className="field-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? 'input-error' : ''}
        />
        {errors.password && <p className="errorMessage">{errors.password}</p>}
      </div>

      <div className="field-container">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? 'input-error' : ''}
        />
          {errors.phone && <p className="errorMessage">{errors.phone}</p>}
      </div>
    </div>
  );
};

export default StepThree;
