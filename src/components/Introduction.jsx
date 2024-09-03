import React from "react";
import linkedinIcon from "../icons/linkedin.png";
import githubIcon from "../icons/github.png";
import myPhoto from "../icons/my-photo-one.jpg";
import twitter from "./pics/twitter.png";

/**relative top-[20%] left-[40%]
 *
 *
 */

function Introduction() {
  return (
    /**This is the div of the entire Introduction container. */
    <div
      className=" grid grid-cols-1
    h-auto
  md:grid-cols-2
  "
    >
      {/**This is the div of the picture container. */}
      <div
        className="flex items-center justify-center
    h-[16rem] mb-[1rem]
    md:h-full"
      >
        {/**This is the div that contains the image. */}
        <div
          className="photo rounded-full overflow-hidden 
      h-[16rem] w-[16rem]"
        >
          <img
            src={myPhoto}
            className="w-full h-full object-cover object-[60%_center]"
          />
        </div>
      </div>
      {/**This is the div of the info container. */}
      <div
        className="info relative flex items-center justify-center
    h-[25rem]"
      >
        {/**This is the container of the actual content of the info. */}
        <div
          className="absolute flex flex-col
      "
        >
          <p className="font-semi-bold text-slate-600 text-xl">Hello, I am</p>
          <p className="text-4xl font-semibold">Mayank Jha</p>
          <p className="font-semi-bold mt-[10px] text-slate-600 text-2xl">
            I am a
          </p>
          <p className="text-3xl mt-[15px] text-slate-600 font-semi-bold">
            Front End Developer
          </p>
          <div className="buttons">
            <button className="mt-[20px] rounded-[20px] bg-black text-white h-[45px] w-auto px-[15px] py-[5px]">
              <a
                href="https://drive.google.com/file/d/1zHar6oK7Q6owLZgiwbS7rC3PvhZ1n4c4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="mt-[10px] social-media flex justify-center space-x-[10px]">
            <button>
              <a
                href="https://www.linkedin.com/in/mayank-jha-047aa41b8/"
                target="_blank"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn Icon"
                  className="h-[40px] w-[40px]"
                ></img>
              </a>
            </button>
            <button>
              <a href="https://github.com/mayank2309jha" target="_blank">
                <img
                  src={githubIcon}
                  alt="Github Icon"
                  className="h-[40px] w-[40px]"
                ></img>
              </a>
            </button>
            <button>
              <a href="https://x.com/MayankJha2309" target="_blank">
                <img
                  src={twitter}
                  alt="Github Icon"
                  className="h-[40px] w-[40px]"
                ></img>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
