import React, { useState } from "react";

function Navbar({ showContact, setShowContact }) {
  const contact = () => {
    //console.log("clicked");
    //console.log(showContact);
    setShowContact((showContact = !showContact));
  };

  return (
    <div className="flex p-[10px] text-xl mb-[30px]">
      <div
        className="left 
      text-2xl
      md:text-3xl"
      >
        <p>Mayank Jha</p>
      </div>
      <div
        className="right flex ml-auto 
      md:space-x-[20px]"
      >
        <p
          className="hover:bg-blue-600 hover:bg-opacity-30 rounded-[15px] mb-[10px] transition-colors duration-500
        md: px-[15px]"
        >
          <a href="#projects">Projects</a>
        </p>
        <p
          className="cursor-pointer hover:bg-blue-600 hover:bg-opacity-30 rounded-[15px] px-[15px] mb-[10px] transition-colors duration-500"
          onClick={contact}
        >
          Contacts
        </p>
      </div>
    </div>
  );
}

export default Navbar;
