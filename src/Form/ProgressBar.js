import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ currentStep, totalSteps, stepMessages }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-bar-container">
      {/* Dynamic Step Information Text */}
      <div className="step-info">
        {stepMessages[currentStep - 1]} {/* Show message based on current step */}
      </div>

      {/* Progress bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Step count label */}
      <div className="step-label">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;
