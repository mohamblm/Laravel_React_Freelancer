import React from "react";
import "./ProgressTracker.css"; // Add custom styles here

const ProgressTracker = ({ steps, currentStep }) => {
  const completionRate = Math.round((currentStep / steps.length) * 100);

  return (
    <div className={ currentStep==0 ?"progress-tracker d-none":'progress-tracker'} >
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className={`step ${currentStep === index + 1 ? "active" : ""} ${index + 1 < currentStep ? "completed" : ""}`}>
            <div className="step-circle">{index + 1}</div>
            <div className="step-title">{step}</div>
          </div>
        ))}
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${completionRate}%` }}></div>
      </div>
      <div className="completion-rate">Completion Rate: {completionRate}%</div>
    </div>
  );
};

export default ProgressTracker;
