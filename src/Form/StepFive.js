import React from 'react';

const StepFive = ({ formData, handleChange, handleBlur, errors, touched }) => {

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
          onBlur={handleBlur}
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
          onBlur={handleBlur}
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
          onBlur={handleBlur}
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
          onBlur={handleBlur}
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
          onBlur={handleBlur}
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
              onBlur={handleBlur}
              required={true}
            />
          </label>
          {errors.occupation && touched.occupation && <span className="error">{errors.occupation}</span>}
        </div>
      )}
    </div>
  );
};

export default StepFive;
