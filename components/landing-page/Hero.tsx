"use client";
import React from "react";
import Navbar from "./Navbar";
import Mobilenav from "./Mobilenav";
import HeroCard from "./Herocard/HeroCard";
import Mobilehero from "./Herocard/Mobilehero";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="w-[100%] relative">
        <div className="z-0 w-full bg-[#0C0C0C]  object-fill">
          <img src="/assets/hero/hero-background.svg" alt="" className="z-10" />
        </div>
        <div className="z-10  border-green-600 absolute inset-0 text-6xl text-white ">
          <div
            className=" w-[100%] m-auto
          fixed z-20 border-red-500
          bg-[url('/assets/hero/Navboxshadow.svg')]
           py-[1rem] hidden lg:block md:block
          "
          >
            <Navbar />
          </div>

          <div
            className="w-[100%] m-auto
          fixed z-20 border-red-500 
          bg-[url('/assets/hero/Navboxshadow.svg')]
           py-[.7rem]  px-[1rem]   sm:block lg:hidden md:hidden
          ">
            <Mobilenav />
          </div>

          <div
            className=" m-auto relative 
          lg:py-[1.5rem] sm:py-[1rem]  hidden lg:block md:block
          top-[8rem] sm:top-[2rem] md:top-[5rem]
           border-yellow-500"
          >
            <HeroCard />
          </div>

          <div
            className="m-auto  
             relative 
             md:top-[8rem]
             top-[6rem]
              mobilehero 
              "
          >
            <Mobilehero />
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
