import React from 'react';
import './Skill.css'; // Import your CSS file

const Skill = () => {
  return (
    <div className="skill-container">
      <h1 className="skill-title">Skills</h1> {/* Title with a class name */}
      <div className="skill-card">
        <h2>Programming</h2>
        <div className="skill-bar">
          <div className="skill-level programming"></div>
        </div>
      </div>
      <div className="skill-card">
        <h2>Design</h2>
        <div className="skill-bar">
          <div className="skill-level design"></div>
        </div>
      </div>
      <div className="skill-card">
        <h2>Communication</h2>
        <div className="skill-bar">
          <div className="skill-level communication"></div>
        </div>
      </div>
    </div>
  );
};


export default Skill;
