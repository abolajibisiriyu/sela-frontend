import React from "react";

import ProjectsLayout from "../blocks/ProjectsLayout";
import Project from "./Project";

function Projects(props) {
  return (
    <ProjectsLayout.List>
      {(props.projects || []).map(project => (
        <Project key={project.id} project={project} />
      ))}
    </ProjectsLayout.List>
  );
}

export default Projects;
