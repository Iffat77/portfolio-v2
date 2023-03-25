import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Projects() {
  return (
    <div className="snap-y snap-mandatory scroll-pb-16 h-screen w-screen mx:auto overflow-x-hidden dark:bg-[#04141E] dark:text-gray-300 ">
      <div className="pt-28 px-6 snap-end h-screen dark:text-white grid grid-cols-1 grid-rows-7 lg:grid-cols-2 lg:grid-rows-3 gap-2 md:gap-4 ">
        <section className="row-span-4 lg:row-start-2 lg:row-span-2 h-full w-full rounded-md bg-hero bg-no-repeat bg-cover bg-center"></section>
        <h2 className="font-font-kanit justify-self-start place-self-center row-span-1 lg:col-span-2 lg:row-span-1 text-4xl md:text-6xl lg:pl-8 pt-3 dark:text-white">
          Apex Stat Tracker
        </h2>
        <div className="max-w-lg row-span-1 lg:row-start-2 ">
          <p className="w-auto max-w-lg text-lg md:text-xl lg:pl-8 lg:py-6 leading-10">
            Apex Stat Tracker is an application that was designed to provide
            users stats for the popular battle royale Apex Legends. The app
            allows you to search for players by entering a platform and a
            username.
          </p>
        </div>
        <div className="w-full row-span-1 r max-w-lg text-xl md:text-2xl lg:row-start-3 lg:pl-8 place-self-center lg:place-self-center lg:justify-self-start ">
          <NavLink to="/projects/apexstats">
            <h1 className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group animate-pulse bg-amber-600  hover:bg-orange-700">
              <span className="relative "> View </span>
            </h1>
          </NavLink>
        </div>
      </div>

      {/* <div className="h-full w-full"></div> */}
      <div className="pt-28 snap-end px-6 w-screen h-screen dark:text-white grid grid-cols-1 grid-rows-7 lg:grid-cols-2 lg:grid-rows-3 md:gap-4 mb-10 ">
        <section className="row-span-4 lg:row-start-2 lg:row-span-2 h-full w-full rounded-md bg-airbot bg-no-repeat bg-cover bg-center"></section>
        <h2 className="font-font-kanit justify-self-start place-self-center row-span-1 lg:col-span-2 lg:row-span-1 text-4xl md:text-6xl lg:pl-8 pt-3 dark:text-white">
          AiQual Twitter Bot
        </h2>
        <div className="max-w-lg row-span-1 lg:row-start-2 ">
          <p className="w-auto max-w-lg text-lg md:text-xl lg:pl-8 lg:py-6 leading-10">
            AiQual is a twitter bot I created to provide information on PM 2.5
            airquality by city. The bot takes a user tweet following a set of
            fields and replies to the users tweet with air quality information
            of the requested city.
          </p>
        </div>

        <div className="w-full row-span-1 r max-w-lg text-xl md:text-2xl lg:row-start-3 lg:pl-8 place-self-center lg:place-self-center lg:justify-self-start ">
          <NavLink to="/projects/aqbot">
            <h1 className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group animate-puls bg-sky-600 hover:bg-blue-700">
              <span className="relative "> View </span>
            </h1>
          </NavLink>
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
      {/* <footer className="">
        <div class="grid grid-rows-6 gap-4">
          <div class="bg-red-500 h-4"></div>
          <div class="bg-blue-500 h-4"></div>
          <div class="bg-green-500 h-4"></div>
          <div class="bg-yellow-500 h-4"></div>
          <div class="bg-purple-500 h-4"></div>
          <div class="bg-pink-500 h-4"></div>
        </div>
      </footer> */}
    </div>
  );
}

export default Projects;
