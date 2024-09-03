import React from "react";
import schoolIcon from "../icons/school-icon.png";

function AboutMe() {
  return (
    <div className="mt-[10%] mb-[10%]">
      {/* <p className="text-slate-600 text-xl mb-[1%]">Get to Know More</p>
      <p className="text-black text-4xl font-bold">About Me</p> */}

      <div
        className="about-me grid mt-[10%]
      grid-cols-1
      lg:grid-cols-2"
      >
        <div className="education flex flex-col items-center justify-center p-5 border-2 border-black m-5 rounded-[30px]">
          <div className="flex mt-[10px] text-xl justify-center space-x-[25px]">
            <img src={schoolIcon} className="h-[30px]"></img>
            <p>2018 Class X CBSE Board</p>
          </div>
          <div className="flex mt-[10px] text-xl justify-center space-x-[25px]">
            <img src={schoolIcon} className="h-[30px]"></img>
            <p>2020 Class XII CBSE Board</p>
          </div>
          <div className="flex mt-[10px] text-xl justify-center space-x-[25px]">
            <img src={schoolIcon} className="h-[30px]"></img>
            <p>2024 B.Tech IIIT Delhi</p>
          </div>
        </div>
        <div className="description p-5 border-2 border-black m-5 rounded-[30px] text-xl pt-[25px]">
          As a dedicated front-end developer, I bring strong expertise in HTML,
          CSS, JavaScript, and ReactJS, along with experience in Redux and
          Tailwind CSS. My background in MySQL, Java, C, and SQL further
          enhances my ability to deliver efficient and dynamic web solutions.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
