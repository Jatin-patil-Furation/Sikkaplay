import Image from "next/image";
import React from "react";
import sikka from "../../../public/assets/hero/hero-heading.svg";
import heroimage from "../../../public/assets/hero/hero-image.svg";
const Mobilehero = () => {
  return (
    <div className="max-w-4xl border-2  border-yellow-700  ">
      <div className="border-2">
        <div className="w-[100px] sm:w-[200px]  m-auto border-2 flex items-center justify-center  border-yellow-400">
          <Image
            src={heroimage}
            alt="Image"
            className="h-[50px]"
          />
        </div>
        <div className="  border-red-400">
          <div className="w-[80%] m-auto">
            <p className="text-white text-center text-[.6rem] font-Lato text-[rgba(255, 255, 255, 0.8)] tracking-[0.1px] ">
              Experience boundless amusement on ultimate betting platform!
              Unfold endless entertainment.
            </p>
          </div>
        </div>
        <div className="flex justify-center  items-center space-x-4 ">
          <button className=" text-white  text-sm rounded  bg-opacity-15  border-white border-[0.5px]">
            Login
          </button>
          <button className="bg-white-500 text-sm  rounded bg-white text-[#ad0b40]  border-white border-[0.5px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobilehero;
