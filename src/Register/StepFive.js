import React from 'react';

const StepFive = ({ formData, handleChange, errors, handleSubmit, handlePreviousStep, isLoading }) => {
  return (
    <div className="form-step authForm">
      <h2>Authorizations & Confirmation</h2>   
      <p>A few more things to help us identify you.</p>
      <p>We may take these steps to verify your info, prevent fraud, and comply with certain state laws. Your authorization will not affect your credit score.</p>

      <h3>Authorization for the Social Security Administration to Disclose Your Social Security Number Verification</h3>
      <p>
        I authorize the Social Security Administration (SSA) to verify and disclose to Virgin Federal Credit Union Bank, N.A. through Early Warning Services, LLC, 
        their service provider for the purpose of this transaction, whether the name, Social Security Number (SSN), and date of birth I have submitted matches information in SSA records. 
        My consent is for a one-time validation within the next 90 days.
      </p>

      {/* First Checkbox */}
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="myCheckbox"
          name="terms"
          checked={formData.terms || false}
          onChange={handleChange}
          required
        />
        <label htmlFor="termsCheckbox">
          Check this box to provide your electronic signature for the authorization above.
        </label>
        {errors.terms && <p className="error-message">{errors.terms}</p>}
      </div>

      <h3>Consumer Report Authorization</h3>
      <p>
        I authorize VFCU to obtain consumer reports that they may use when considering my application (my credit score is not impacted). 
        I also authorize VFCU to obtain subsequent consumer reports and any other information about me in connection with: 
        1) the administration, review or collection of my account, and 
        2) offers of enhanced or additional products and services or for other legitimate purposes associated with my account.
      </p>

      {/* Second Checkbox */}
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="myCheckbox"
          name="notifications"
          checked={formData.notifications || false}
          onChange={handleChange}
          required
        />
        <label htmlFor="notificationsCheckbox">
          Check this box to agree to the Consumer Report Authorization above and to verify that all the information you’ve given us is correct.
        </label>
        {errors.notifications && <p className="error-message">{errors.notifications}</p>}
      </div>

      {/* ID Type Selection */}
      <div>
        <label>ID Type</label>
        <select name="stateIdType" value={formData.stateIdType} onChange={handleChange}>
          <option value="">Select ID Type</option>
          <option value="Driver's License">Driver's License</option>
          <option value="State ID">State ID</option>
        </select>
        {errors.stateIdType && <p className="error-message">{errors.stateIdType}</p>}
      </div>

      {/* Conditional ID Card Number and Expiration Date */}
      {formData.stateIdType && (
        <>
          <div>
            <label>{formData.stateIdType} Card Number</label>
            <input
              type="text"
              name="idCardNumber"
              value={formData.idCardNumber}
              onChange={handleChange}
            />
            {errors.idCardNumber && <p className="error-message">{errors.idCardNumber}</p>}
          </div>

          <div>
            <label>{formData.stateIdType} Expiration Date</label>
            <input
              type="date"
              name="idExpirationDate"
              value={formData.idExpirationDate}
              onChange={handleChange}
            />
            {errors.idExpirationDate && <p className="error-message">{errors.idExpirationDate}</p>}
          </div>
        </>
      )}

      {/* Email Input */}
      <div>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      {/* Buttons */}
      <div className="form-navigation">
        <button onClick={handlePreviousStep}>Previous</button>
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={isLoading ? 'loading' : ''}
        >
          {isLoading ? <div className="spinner"></div> : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default StepFive;
