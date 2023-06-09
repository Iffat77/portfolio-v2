import React from "react";
import { NavLink } from "react-router-dom";

function Projects() {
  return (
    <div className="snap-y snap-mandatory scroll-pb-8 md:scroll-pb-10 h-screen w-screen mx:auto overflow-x-hidden dark:bg-[#04141E] dark:text-gray-300 ">
      <div className="pt-28 px-6 snap-end h-screen dark:text-white grid grid-cols-1 grid-rows-7 lg:grid-cols-2 lg:grid-rows-3 gap-2 md:gap-4 ">
        <section className="row-span-4 lg:row-start-2 lg:row-span-2 h-full w-full rounded-md bg-lesscarbon bg-no-repeat bg-cover shadow-md"></section>
        <h2 className="font-font-kanit justify-self-start place-self-center row-span-1 lg:col-span-2 lg:row-span-1 text-4xl md:text-6xl lg:pl-8 pt-3 dark:text-white">
          Less Carbon
        </h2>
        <div className="max-w-lg row-span-1 lg:row-start-2 ">
          <p className="w-auto max-w-lg text-lg md:text-xl lg:pl-8 lg:py-6 leading-10">
            Less Carbon is a platform and community where users can express themselves and connect with like-minded individuals.
            It provides a space for people to share their voices and engage with others by commenting on articles and even contributing their own written pieces.
          </p>
        </div>
        <div className="w-full row-span-1 text-xl  pb-2 md:text-2xl lg:row-start-3 lg:pl-8  md:place-self-center lg:place-self-center lg:justify-self-start ">
          <NavLink to="/projects/lesscarbon">
            <div className="relative inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-3 overflow-hidden font-bold text-white rounded-md group animate-pulse bg-gray-400 hover:bg-gray-700 shadow-gray-500 shadow-md dark:shadow-none">
              <span className="relative "> View </span>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="pt-28 px-6 snap-end h-screen dark:text-white grid grid-cols-1 grid-rows-7 lg:grid-cols-2 lg:grid-rows-3 gap-2 md:gap-4 ">
        <section className="row-span-4 lg:row-start-2 lg:row-span-2 h-full w-full rounded-md bg-hero bg-no-repeat bg-cover bg-center shadow-black shadow-md"></section>
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
        <div className="w-full row-span-1 text-xl  pb-2 md:text-2xl lg:row-start-3 lg:pl-8  md:place-self-center lg:place-self-center lg:justify-self-start ">
          <NavLink to="/projects/apexstats">
            <div className="relative inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-3 overflow-hidden font-bold text-white rounded-md group animate-pulse bg-amber-600  hover:bg-orange-700 shadow-gray-500 shadow-md dark:shadow-none">
              <span className="relative "> View </span>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="pt-28 snap-end px-6 w-screen h-screen dark:text-white grid grid-cols-1 grid-rows-7 lg:grid-cols-2 lg:grid-rows-3 md:gap-4 mb-10 ">
        <section className="row-span-4 lg:row-start-2 lg:row-span-2 h-full w-full rounded-md bg-airbot bg-no-repeat bg-cover bg-center shadow-black shadow-md"></section>
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

        <div className="w-full row-span-1 text-xl pb-2 md:text-2xl lg:row-start-3 lg:pl-8 md:place-self-center lg:place-self-center lg:justify-self-start ">
          <NavLink to="/projects/aqbot">
            <div className="relative inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-3 overflow-hidden font-bold text-white rounded-md group animate-puls bg-sky-600 hover:bg-blue-700 shadow-gray-500 shadow-md dark:shadow-none">
              <span className="relative "> View </span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Projects;
