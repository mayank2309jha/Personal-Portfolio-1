import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="card w-64 h-[23rem] bg-white shadow-md rounded-lg items-center justify-center overflow-hidden py-6 px-2">
      <div className="photo w-full h-40 overflow-hidden mb-10">
        <img src={project.pic} className="w-full h-full object-contain"></img>
      </div>
      <div className="description">{project.description}</div>
      <div className="link font-bold text-xl">
        <a href={project.link} target="_blank">
          {project.name}
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
