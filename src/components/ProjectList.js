import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  //const projItem=projects.map((project)=><ProjectItem  name={projects.name} about={projects.about} technologies={projects.technologies}/> )
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        
         {projects.map((project)=>
        <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>)} 
       </div>
    </div>
  );
}

export default ProjectList;
