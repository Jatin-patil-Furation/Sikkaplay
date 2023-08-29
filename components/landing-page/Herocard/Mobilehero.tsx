import Image from "next/image";
import React from "react";
import sikka from "../../../public/assets/hero/hero-heading.svg";

const Mobilehero = () => {
  return (
    <div className="max-w-4xl px-[.3rem] border-yellow-700  ">
      <div className="py-[.2rem] px-[.4rem] ">
        <div className="w-[100px] m-auto h-[30px] flex items-center justify-center sikka border-yellow-400">
          <Image src={sikka} alt="img" />
        </div>

        <div className="  border-red-400">
          <div className="w-[80%] m-auto">
            <p className="text-white text-center text-[.6rem] font-Lato text-[rgba(255, 255, 255, 0.8)] tracking-[0.1px] ">
              Experience boundless amusement on ultimate betting platform!
              Unfold endless entertainment.
            </p>
          </div>
        </div>
        <div className="text-center relative top-[-30px] border-pink-500">
          <button className="text-white py-[.4rem]  px-[.8rem] text-center text-[.7rem] rounded-[5px] join-button">
            Join Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobilehero;
