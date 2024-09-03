import React from "react";
import alarmClock from "./pics/alarmclock.png";
import analogClock from "./pics/analogclock.png";
import calculator from "./pics/calculator.png";
import calender from "./pics/calender.png";
import digitalclock from "./pics/digitalclock.png";
import dynamictext from "./pics/dynamictexttypinganimation.png";
import emicalculator from "./pics/emicalculator.png";
import imageslider from "./pics/imageslider.png";
import pomodoroclock from "./pics/pomodoroclock.png";
import popupmodal from "./pics/popupmodal.png";
import stopwatch from "./pics/stopwatch.png";
import ProjectCard from "./ProjectCard";
import leftArrow from "./pics/left-arrow.png";
import rightArrow from "./pics/right-arrow.png";

import amazon from "./pics/amazon.png";
import todolist from "./pics/todolist-react.png";

function AllProjects() {
  const projects = [
    {
      name: "E-Commerce Website Clone",
      description:
        "Amazon clone with API-based products, filters, cart, Tailwind, Redux.",
      link: "https://e-commerce-app-1db6e.web.app/",
      pic: amazon,
    },
    {
      name: "Todo List",
      description:
        "React, Tailwind CSS todo list with task management and user-friendly interface.",
      link: "https://todolist10nov.web.app/",
      pic: todolist,
    },
    {
      name: "Alarm Clock",
      link: "https://mayank2309jha.github.io/Alarm-Clock/",
      pic: alarmClock,
      description:
        "JavaScript alarm clock with customizable alarms and Tailwind CSS for design.",
    },
    {
      name: "Analog-Clock",
      link: "https://mayank2309jha.github.io/Analog-Clock2024/",
      pic: analogClock,
      description: "Analog clock with dark mode and styled using Tailwind CSS.",
    },
    {
      name: "Calculator",
      link: "https://mayank2309jha.github.io/Calculator2024/",
      pic: calculator,
      description:
        "Calculator with Tailwind CSS styling for a modern UI experience.",
    },
    {
      name: "Calender",
      link: "https://mayank2309jha.github.io/Calender/",
      pic: calender,
      description:
        "Calendar displays today's date, navigates months/years, styled with Tailwind CSS.",
    },
    {
      name: "Digital Clock",
      link: "https://mayank2309jha.github.io/Digital-Clock2024/",
      pic: digitalclock,
      description:
        "Digital clock with dark mode feature, providing real-time updates.",
    },
    {
      name: "EMI Calculator",
      link: "https://mayank2309jha.github.io/EMI-Calculator2024/",
      pic: emicalculator,
      description:
        "EMI calculator for computing monthly payments based on loan terms.",
    },
    {
      name: "Image Slider",
      link: "https://mayank2309jha.github.io/Image-Slider-Level1/",
      pic: imageslider,
      description:
        "Image slider with smooth transitions and navigation controls.",
    },
    {
      name: "Dynamic Text Typing Animation",
      link: "https://mayank2309jha.github.io/Multiple-Typing-Text-Animation/",
      pic: dynamictext,
      description:
        "Dynamic typing animation: Text types, deletes, and cycles through words.",
    },
    {
      name: "Pomodoro Clock",
      link: "https://mayank2309jha.github.io/Pomodoro-Clock/",
      pic: pomodoroclock,
      description:
        "Pomodoro clock with start, pause, resume, and reset functionality.",
    },
    {
      name: "Pop Up Modal",
      link: "https://mayank2309jha.github.io/Pop-Up-Modal/",
      pic: popupmodal,
      description:
        "Pop-up modal with social media links appears upon button click.",
    },
    {
      name: "Stop Watch",
      link: "https://mayank2309jha.github.io/Stopwatch/",
      pic: stopwatch,
      description:
        "Stopwatch with start, stop, and reset functionalities built with JavaScript.",
    },
  ];
  return (
    <div
      className="grid mt-[50px] justify-center
      grid-cols-1 gap-y-[30px]
      md:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
    "
    >
      {projects.map((project, index) => (
        <div key={index} className="flex items-center justify-center">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default AllProjects;
