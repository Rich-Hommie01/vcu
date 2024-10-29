import React from 'react';

const StepFive = ({ formData, handleChange, errors, }) => {

  const showOccupationField = formData.employment && !['Retired', 'Unemployed'].includes(formData.employment);

  return (
    <div className='row'>
      
      <label>
        <input
          type="radio"
          name="employment"
          value="Employed"
          checked={formData.employment === 'Employed'}
          onChange={handleChange}
        />
        Employed
      </label>

      <label>
        <input
          type="radio"
          name="employment"
          value="Self Employed"
          checked={formData.employment === 'Self Employed'}
          onChange={handleChange}
        />
        Self Employed
      </label>

      <label>
        <input
          type="radio"
          name="employment"
          value="Retired"
          checked={formData.employment === 'Retired'}
          onChange={handleChange}
        />
        Retired
      </label>

      <label>
        <input
          type="radio"
          name="employment"
          value="Unemployed"
          checked={formData.employment === 'Unemployed'}
          onChange={handleChange}
        />
        Unemployed
      </label>

      <label>
        <input
          type="radio"
          name="employment"
          value="Other"
          checked={formData.employment === 'Other'}
          onChange={handleChange}
        />
        Other
      </label>

      {showOccupationField && (
        <div>
          <label>
            Occupation
            <input
              type="text"
              name="occupation"
              value={formData.occupation || ''}
              onChange={handleChange}
              required={true}
            />
          </label>
          {errors.occupatio && <span className="errorMessage">{errors.occupation}</span>}
        </div>
      )}
    </div>
  );
};

export default StepFive;
