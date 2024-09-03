import React from "react";
import githubIcon from "./pics/github.png";
import linkedIn from "./pics/linkedin-colored.png";
import twitter from "./pics/twitter-colored.png";
import whatsapp from "./pics/whatsapp-colored.png";
import close from "./pics/close.png";

function Modal({ showContact, setShowContact }) {
  const contact = () => {
    setShowContact((showContact = !showContact));
  };
  return (
    <>
      <div
        className="modal-wrapper fixed bg-gray-800 bg-opacity-80 inset-0 z-30 flex justify-center items-center"
        onClick={contact}
      >
        <div
          className="modal-container z-50 bg-white h-[auto] w-[500px] rounded-2xl p-10 my-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/**Modal Content */}
          <div className="modal text-black flex flex-col items-center">
            {/**Header */}
            <div className="header flex justify-between w-full mb-5">
              <p className="font-bold text-lg">How to Reach Me</p>
              <img src={close} className="h-[20px]" onClick={contact}></img>
            </div>

            <hr className="w-full mb-4" />

            {/**Social Media Links */}
            <p className="my-[20px]">Contact me via</p>
            <div className="flex justify-evenly w-full mb-[20px]">
              <a href="https://github.com/mayank2309jha" target="_blank">
                <img src={githubIcon} className="h-[50px]"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/mayank-jha-047aa41b8/"
                target="_blank"
              >
                <img src={linkedIn} className="h-[50px]"></img>
              </a>
              <a href="https://x.com/MayankJha2309" target="_blank">
                <img src={twitter} className="h-[50px]"></img>
              </a>
              <a href="https://wa.me/919870260045" target="_blank">
                <img src={whatsapp} className="h-[50px]"></img>
              </a>
            </div>

            <div className="w-full">
              <p className="text-xl mt-[10px] font-medium">
                Mail me : mjzeus1729@gmail.com
              </p>
              <p className="text-xl mt-[10px] font-medium">
                Contact me : 9870260045
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
