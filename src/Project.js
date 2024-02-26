// Projects.js

import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects">
        <ProjectItem
          title="Project 1"
          description="Description of Project 1"
          githubLink="https://github.com/yourproject1"
          liveDemoLink="https://yourproject1.com"
        />
        <ProjectItem
          title="Project 2"
          description="Description of Project 2"
          githubLink="https://github.com/yourproject2"
          liveDemoLink="https://yourproject2.com"
        />
      </div>
    </section>
  );
}

export default Projects;