import React from "react";

const ProgressBar = ({ step, totalSteps, stepText }) => {
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div className="progress-bar-container">
      {/* Display the step-specific text */}
      <p className="progress-text">{stepText}</p>
      
      <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      <p className="step-text">{`Step ${step} of ${totalSteps}`}</p>
    </div>
  );
};

export default ProgressBar;
