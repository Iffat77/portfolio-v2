import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Projects() {
  return (
    <div className="h-screen w-screen bg-amber-50 dark:bg-[#04141E] dark:text-gray-300 overflow-auto">
      <div className="pt-28 px-6 w-full h-full dark:text-white grid grid-cols-1 grid-rows-5 lg:grid-cols-2 lg:grid-rows-3 md:gap-4 ">
        <section className="row-span-3 lg:row-start-2 lg:row-span-2 h-full w-full rounded-md bg-hero bg-no-repeat bg-cover bg-center"></section>
        <h2 className="font-font-kanit justify-self-start place-self-center row-span-1 lg:col-span-2 lg:row-span-1 text-4xl md:text-6xl lg:pl-8 pt-3 dark:text-white">
          Apex Stat Tracker
        </h2>

        <div className="w-full max-w-lg text-xl md:text-2xl lg:pl-8  lg:justify-self-start">
          <a
            href="/projects/apexstats"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group animate-pulse bg-gray-500 hover:bg-green-600"
          >
            <span className="relative "> View </span>
          </a>
          
        </div>
      </div>

      {/* <div className="h-full w-full"></div> */}
      <div className="pt-28 px-6 w-full h-full dark:text-white grid grid-cols-1 grid-rows-5 lg:grid-cols-2 lg:grid-rows-3 md:gap-4 ">
        <section className="row-span-3 lg:row-start-2 lg:row-span-2 h-full w-full rounded-md bg-airbot bg-no-repeat bg-cover bg-center"></section>
        <h2 className="font-font-kanit justify-self-start place-self-center row-span-1 lg:col-span-2 lg:row-span-1 text-4xl md:text-6xl lg:pl-8 pt-3 dark:text-white">
          AirQual Twitter Bot
        </h2>

        <div className="w-full max-w-lg text-xl md:text-2xl lg:pl-8  lg:justify-self-start">
          <a
            href="/projects/aqbot"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group animate-pulse bg-gray-500  hover:bg-green-600"
          >
            <span className="relative "> View </span>
          </a>
          
        </div>
      </div>



      



      {/* <section className="h-full mt-8 p-10 top-0 left-0 right-0 bottom-auto w-auto">
          <div className="block">
            <h2 className="font-font-work text-8xl pt-15 md:text-10xl lg:pl-8 lg:pt-24 py-3 dark:text-white">
              The Second project
            </h2>
          </div>
        </section>
      
        <section className="h-full mt-8 p-10 top-0 left-0 right-0 bottom-auto w-auto">
          <div className="block">
            <h2 className="font-font-work text-8xl pt-15 md:text-10xl lg:pl-8 lg:pt-24 py-3 dark:text-white">
              The Third project
            </h2>
          </div>
        </section> */}
    </div>
  );
}

export default Projects;
