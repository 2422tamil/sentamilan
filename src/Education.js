import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-container">
      <h2 className="education-heading">Education</h2>
      <div className="education-item">
        <h3>Bachelor's Degree in Commerce</h3>
        <p>Vel Tech Ranga Sanku Arts College</p>
        <p>Graduated: May 2022</p>
      </div>
      <div className="education-item">
        <h3>Master's Degree in Software Engineering</h3>
        <p>University of XYZ</p>
        <p>Expected Graduation: May 2024</p>
      </div>
      {/* Add more education items as needed */}
    </div>
  );
}

export default Education;
