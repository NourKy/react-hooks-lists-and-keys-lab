import React from "react";

function ProjectItem({ name, about, technologies }) {
 // const techno=technologies.map((technology,index)=><span key={index}>{technology.name}</span>);
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((techno,index)=><span key={index}>{techno}</span>)}
        
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
