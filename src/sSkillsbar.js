// SkillBar.js
import React from 'react';

const SkillBar = ({ skillName, level }) => {
  return (
    <div className="skill-bar">
      <div className="skill-name">{skillName}</div>
      <div className="bar-container">
        <div className="bar" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
}

export default SkillBar;
