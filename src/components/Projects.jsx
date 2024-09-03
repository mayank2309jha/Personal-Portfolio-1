import React from "react";
import JSProjects from "./JSProjects";
import ReactSmall from "./ReactSmall";
import ReactBig from "./ReactBig";
import AllProjects from "./AllProjects";

function Projects() {
  return (
    <div className="mb-[500px]" id="projects">
      {/* <p className="my-[50px] relative text-left text-4xl">
        React Advanced Projects
      </p>
      <ReactBig />
      <p className="my-[50px] relative text-left text-4xl">
        React Intermediate Projects
      </p> */}
      {/* <ReactSmall /> */}
      <p className=" relative text-left text-4xl">Featured Projects</p>
      <JSProjects />
      <p className="mb-[50px] mt-[100px] relative text-left text-4xl">
        All Projects Projects
      </p>
      <AllProjects />
    </div>
  );
}

export default Projects;
