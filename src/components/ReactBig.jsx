import React from "react";
import amazon from "./pics/amazon.png";
import ProjectCard from "./ProjectCard";

function ReactBig() {
  const projects = [
    {
      name: "E-Commerce Website Clone",
      description: "React, E-Commerce Clone.",
      link: "https://e-commerce-app-1db6e.web.app/",
      pic: amazon,
    },
  ];

  return (
    <div className="flex mt-[50px] flex-wrap justify-center gap-4 w-full">
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default ReactBig;
