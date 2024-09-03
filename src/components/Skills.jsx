import React from "react";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "ReactJS",
    "Redux",
    "Tailwind CSS",
    "MySQL",
    "Java",
    "C",
    "SQL",
  ];

  return (
    <div className="mt-[5rem]">
      <p
        className="mb-[50px] relative text-4xl
      text-center
      md:text-left"
      >
        What Can I Do?
      </p>
      <ul
        className="grid
      grid-cols-1
      sm:grid-cols-2 sm:gap-3
      md:grid-cols-3 md:gap-5
      lg:grid-cols-4 
      "
      >
        {skills.map((skill, index) => (
          <li
            key={index}
            className="text-2xl py-2 px-2 rounded-lg shadow-md hover:bg-blue-100 hover:shadow-xl transition-all duration-300
            text-center
            md:text-left"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
