import React from "react";
import todolist from "./pics/todolist-react.png";
import ProjectCard from "./ProjectCard";

function ReactSmall() {
  const projects = [
    {
      name: "Todo List",
      description: "This is a React Project that I have made.",
      link: "https://todolist10nov.web.app/",
      pic: todolist,
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

export default ReactSmall;
