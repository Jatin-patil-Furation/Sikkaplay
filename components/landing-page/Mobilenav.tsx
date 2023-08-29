"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const Mobilenav: React.FC = () => {
  return (
    <nav
      className="px-[2.2rem]   mx-auto flex justify-between items-center mobilenav">
      <div className="flex px-[.2rem] items-center">
        <GiHamburgerMenu className="text-3xl  text-white cursor-pointer" />
      </div>

      <div className="text-white flex items-center justify-center py-[1rem] px-[.5rem] font-bold ">
        <p className=" float-right text-white text-2xl game-text">Logo</p>
      </div>
    </nav>
  );
};

export default Mobilenav;
