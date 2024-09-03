import React, { useState, useEffect } from "react";
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

function useBreakpointLogger(onDisplay, setOnDisplay) {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  useEffect(() => {
    // Define media queries for breakpoints
    const xlQuery = window.matchMedia("(min-width: 1280px)");
    const lgQuery = window.matchMedia(
      "(min-width: 1024px) and (max-width: 1279px)"
    );
    const mdQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    const smQuery = window.matchMedia("(max-width: 767px)");

    // Define the function to handle changes
    const handleBreakpointChange = () => {
      const newBreakpoint = getBreakpoint();
      if (newBreakpoint !== breakpoint) {
        console.log(`Breakpoint changed to: ${newBreakpoint}`);

        // Update onDisplay based on breakpoint change
        updateOnDisplay(breakpoint, newBreakpoint);

        setBreakpoint(newBreakpoint);
      }
    };

    // Add listeners
    xlQuery.addEventListener("change", handleBreakpointChange);
    lgQuery.addEventListener("change", handleBreakpointChange);
    mdQuery.addEventListener("change", handleBreakpointChange);
    smQuery.addEventListener("change", handleBreakpointChange);

    // Call handler once to set the initial breakpoint
    handleBreakpointChange();

    // Clean up listeners on unmount
    return () => {
      xlQuery.removeEventListener("change", handleBreakpointChange);
      lgQuery.removeEventListener("change", handleBreakpointChange);
      mdQuery.removeEventListener("change", handleBreakpointChange);
      smQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, [breakpoint]);

  function getBreakpoint() {
    if (window.matchMedia("(min-width: 1280px)").matches) return "xl";
    if (
      window.matchMedia("(min-width: 1024px) and (max-width: 1279px)").matches
    )
      return "lg";
    if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches)
      return "md";
    return "sm";
  }

  function updateOnDisplay(oldBreakpoint, newBreakpoint) {
    const breakpoints = ["sm", "md", "lg", "xl"];
    const oldIndex = breakpoints.indexOf(oldBreakpoint);
    const newIndex = breakpoints.indexOf(newBreakpoint);

    // Update onDisplay based on breakpoint change
    if (oldIndex < newIndex) {
      setOnDisplay((prev) => Math.min(prev + 1, 4)); // Cap to a max of 4 columns
    } else if (oldIndex > newIndex) {
      setOnDisplay((prev) => Math.max(prev - 1, 1)); // Cap to a min of 1 column
    }

    console.log(`onDisplay: ${onDisplay}`);
  }
}
function getBreakpoint() {
  if (window.matchMedia("(min-width: 1280px)").matches) return "xl";
  if (window.matchMedia("(min-width: 1024px) and (max-width: 1279px)").matches)
    return "lg";
  if (window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches)
    return "md";
  return "sm";
}
function JSProjects() {
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

  const [onDisplay, setOnDisplay] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(onDisplay);
  const [toShow, setToShow] = useState(onDisplay);

  useBreakpointLogger(onDisplay, setOnDisplay);

  useEffect(() => {
    // Initial window width check to set onDisplay
    const initialBreakpoint = getBreakpoint();
    const initialOnDisplay = {
      xl: 4,
      lg: 3,
      md: 2,
      sm: 1,
    }[initialBreakpoint];

    setOnDisplay(initialOnDisplay);
    setEnd(start + initialOnDisplay);
    setToShow(initialOnDisplay);
  }, []);

  useEffect(() => {
    setEnd(start + onDisplay);
    setToShow(onDisplay);
  }, [start, onDisplay]);

  const left = () => {
    //console.log(start, end);
    if (start == 0) {
      setStart(projects.length - toShow);
      setEnd(projects.length);
    } else {
      setStart(start - 1);
      setEnd(end - 1);
    }
  };
  const right = () => {
    //console.log(start, end);
    if (end == projects.length) {
      setStart(0);
      setEnd(toShow);
    } else {
      setStart(start + 1);
      setEnd(end + 1);
    }
  };
  return (
    <div
      className="grid mt-[10px] w-full
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4"
    >
      <div
        className="left-button h-16 w-16 absolute left-[10%] mt-[8%] rounded-full border-[0.5px] border-black flex items-center justify-center"
        onClick={left}
      >
        <img src={leftArrow} className="h-[60%] w-[60%]"></img>
      </div>
      {projects.slice(start, end).map((project, index) => (
        <div key={index} className="flex items-center justify-center">
          <ProjectCard project={project} />
        </div>
      ))}
      <div
        className="left-button h-16 w-16 absolute right-[10%] mt-[8%] rounded-full border-[0.5px] border-black flex items-center justify-center"
        onClick={right}
      >
        <img src={rightArrow} className="h-[60%] w-[60%] "></img>
      </div>
    </div>
  );
}

export default JSProjects;
