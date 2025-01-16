import React from "react";
import { Link } from "react-router-dom";
import "./ProgressTracker.css"; // Add custom styles here

const ProgressTracker = ({ steps, currentStep }) => {
  const completionRate = Math.round((currentStep / steps.length) * 100);

  const handleLink=(e, index)=>{
    if(currentStep <= index + 1){
      e.preventDefault()
    }
  }

  return (
    <div className={currentStep == 0 ? "progress-tracker d-none" : 'progress-tracker'} >
      <div className="steps">
        {steps.map((step, index) => (
          <Link key={index} to={step.route} className="stepLink"  onClick={(e)=>handleLink(e, index)} >
            <div  className={`step ${currentStep === index + 1 ? "active" : ""} ${index + 1 < currentStep ? "completed" : ""}`}    >
              <div className="step-circle">{index + 1}</div>
              <div className="step-title">{step.title}</div>
            </div>
          </Link>
        ))}
      </div>
      <div >
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${completionRate}%` }}></div>
        </div>
        <div className="completion-rate">Completion Rate: {completionRate}%</div>
      </div>

    </div>
  );
};

export default ProgressTracker;
