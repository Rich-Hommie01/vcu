// ProgressBar.js
import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        {currentStep}/{totalSteps} Steps Completed
      </div>
    </div>
  );
};

export default ProgressBar;
