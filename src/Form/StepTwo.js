import React from 'react';

const StepTwo = ({ formData, handleChange, handleBlur, touched, errors }) => {
  return (
    <div className="step">
      <div className="row">
        <div className="field-container">
          <label htmlFor="street">Street Address Line One</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            placeholder="Street"
            onBlur={handleBlur}
            className={errors.street && touched.street ? 'input-error' : ''}
          />
          {errors.street && <p className="error">{errors.street}</p>}
        </div>
        <div className="field-container">
          <label htmlFor="apt">Apt or Unit# (optional)</label>
          <input
            type="text"
            id="apt"
            name="apt"
            value={formData.apt}
            onChange={handleChange}
            placeholder="Apt or Unit#"
          />
        </div>
        <div className="field-container">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            onBlur={handleBlur}
            className={errors.city && touched.city ? 'input-error' : ''}
          />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>
        <div className="field-container">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            onBlur={handleBlur}
            className={errors.state && touched.state ? 'input-error' : ''}
          />
          {errors.state && <p className="error">{errors.state}</p>}
        </div>
        <div className="field-container">
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            onBlur={handleBlur}
            className={errors.zipCode && touched.zipCode ? 'input-error' : ''}
          />
          {errors.zipCode && <p className="error">{errors.zipCode}</p>}
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
