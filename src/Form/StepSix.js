import React from 'react';

const StepSix = ({ formData, handleChange, errors }) => {
  return (
    <div className="form-step authForm">  
      <h2>A few more things to help us identify you.</h2>
      <p>We may take these steps to verify your info, prevent fraud, and comply with certain state laws. Your authorization will not affect your credit score.</p>

      <h2>Authorization for the Social Security Administration to Disclose Your Social Security Number Verification</h2>
      <p>
        I authorize the Social Security Administration (SSA) to verify and disclose to Vaylx Credit Union Bank, N.A. through Early Warning Services, LLC, 
        their service provider for the purpose of this transaction, whether the name, Social Security Number (SSN), and date of birth I have submitted matches information in SSA records. 
        My consent is for a one-time validation within the next 90 days.
      </p>

      <div className="checkbox-container">
        <input
          type="checkbox"
          id="termsCheckbox"
          name="terms"
          checked={formData.terms || false}
          onChange={handleChange}
          required
        />
        <label htmlFor="termsCheckbox">
          Check this box to provide your electronic signature for the authorization above.
        </label>
        {errors.terms && <p className="errorMessage">{errors.terms}</p>}
      </div>

      <h2>Consumer Report Authorization</h2>
      <p>
        I authorize VCU to obtain consumer reports that they may use when considering my application (my credit score is not impacted). 
        I also authorize VCU to obtain subsequent consumer reports and any other information about me in connection with: 
        1) the administration, review or collection of my account, and 
        2) offers of enhanced or additional products and services or for other legitimate purposes associated with my account.
      </p>

      <div className="checkbox-container">
        <input
          type="checkbox"
          id="notificationsCheckbox"
          name="notifications"
          checked={formData.notifications || false}
          onChange={handleChange}
          required
        />
        <label htmlFor="notificationsCheckbox">
          Check this box to agree to the Consumer Report Authorization above and to verify that all the information you’ve given us is correct.
        </label>
        {errors.notifications && <p className="errorMessage">{errors.notifications}</p>}
      </div>

      <div>
        <label className='labelInput'>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          placeholder="Email"
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <p className="errorMessage">{errors.email}</p>}
      </div>
    </div>
  );
};

export default StepSix;
