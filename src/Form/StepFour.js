import React, { useState } from 'react';

const StepFour = ({ formData, handleChange, errors }) => {
  const [idType, setIdType] = useState('');

  return (
    <div className="step">
      <label className="FormLabelText">Select ID Type</label>
      <div>
        <label>
          <input
            type="radio"
            name="idType"
            value="driverLicense"
            checked={idType === 'driverLicense'}
            onChange={(e) => setIdType(e.target.value)}
          />
          Driver's License
        </label>

        <label>
          <input
            type="radio"
            name="idType"
            value="stateId"
            checked={idType === 'stateId'}
            onChange={(e) => setIdType(e.target.value)}
          />
          State ID
        </label>
      </div>

      {idType === 'driverLicense' && (
        <div className="row">
          <div className="field-container">
            <label htmlFor="idNumber">ID Number</label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              className={errors.idNumber ? 'input-error' : ''}
            />
            {errors.idNumber && (
              <p className="errorMessage">{errors.idNumber}</p>
            )}
          </div>

          <div className="field-container">
            <label htmlFor="issueState">Issuing State</label>
            <input
              type="text"
              id="issueState"
              name="issueState"
              value={formData.issueState}
              onChange={handleChange}
              className={errors.issueState ? 'input-error' : ''}
            />
            {errors.issueState && (
              <p className="errorMessage">{errors.issueState}</p>
            )}
          </div>

          <div className="field-container">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="date"
              id="expirationDate"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              className={errors.expirationDate ? 'input-error' : ''}
            />
            {errors.expirationDate && (
              <p className="errorMessage">{errors.expirationDate}</p>
            )}
          </div>
        </div>
      )}

      {idType === 'stateId' && (
        <div className="row">
          <div className="field-container">
            <label htmlFor="idNumber">ID Number</label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              className={errors.idNumber ? 'input-error' : ''}
            />
            {errors.idNumber && (
              <p className="errorMessage">{errors.idNumber}</p>
            )}
          </div>

          <div className="field-container">
            <label htmlFor="issueState">Issuing State</label>
            <input
              type="text"
              id="issueState"
              name="issueState"
              value={formData.issueState}
              onChange={handleChange}
              className={errors.issueState ? 'input-error' : ''}
            />
            {errors.issueState && (
              <p className="errorMessage">{errors.issueState}</p>
            )}
          </div>

          <div className="field-container">
            <label htmlFor="expirationDate">Expiration Date</label>
            <input
              type="date"
              id="expirationDate"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              className={errors.expirationDate ? 'input-error' : ''}
            />
            {errors.expirationDate && (
              <p className="errorMessage">{errors.expirationDate}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StepFour;
