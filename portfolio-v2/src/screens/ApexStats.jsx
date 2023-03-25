import React from "react";
import { NavLink } from "react-router-dom";

function ApexStats() {
  return (
    <div className="h-screen w-screen dark:bg-[#04141E] dark:text-gray-300 overflow-auto">
      <div className="pt-28 px-6 dark:text-white flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-5">
        <section className="sm:row-span-2 basis-96 lg:row-start-2 lg:row-span-3 h-full w-full rounded-md bg-hero bg-no-repeat bg-cover bg-center"></section>
        <div className=" font-font-kanit justify-self-center place-self-center row-span-1 lg:col-span-2 lg:row-span-1 text-4xl md:text-6xl lg:pl-8 pt-3 dark:text-white">
          {/* font-font-kanit justify-self-center place-self-center row-span-1 lg:col-span-2 lg:row-span-1 text-4xl md:text-6xl lg:pl-8 pt-3 dark:text-white */}
          <h2 className="">Apex Stat Tracker</h2>
        </div>
        <div className="lg:row-start-2 row-span-1">
          <h2 className="font-font-work text-2xl w-auto mx-4 lg:pl-8">
            Summary
          </h2>
          <p className="w-auto py-3 max-w-4xl text-lg md:text-xl mx-4 lg:pl-8 leading-8 h-full">
            Apex Stat Tracker, as its name implies, enables users to retrieve
            the statistics of Apex Legends players based on their platform and
            username. This project was particularly rewarding for me, as Apex
            Legends is a game that I frequently enjoy playing.
          </p>
        </div>
        <div className="lg:py-4 row-span-1">
          <h2 className="font-font-work text-2xl w-auto mx-4 lg:pl-8">
            Challenges
          </h2>
          <p className="w-auto py-3 max-w-4xl text-lg md:text-xl mx-4 lg:pl-8 leading-8 h-full">
            One of the most significant obstacles I encountered during this
            project was resolving a CORS error. While I had previously attempted
            to avoid dealing with CORS, I realized that it was necessary to
            address this challenge in order to successfully complete this
            project, which was personally meaningful to me.
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:py-4 row-span-1">
          <h2 className="font-font-work text-2xl w-auto mx-4 lg:pl-8">
            Solution & Post Mvp
          </h2>

          <p className="w-auto py-3 max-w-4xl text-lg md:text-xl mx-4 lg:pl-8 leading-8 h-full">
            At first, I tried some quick fixes to run my app on my own computer,
            but I knew they wouldn't work in production. So, after some digging
            around, I found out that setting up a backend proxy could help me
            get around the CORS issue. Looking back, it wasn't that hard to set
            up, and I learned a lot from the experience. Now I'm working on a
            new version of the app with more cool stuff, like match history and
            a better-looking interface.
          </p>
        </div>

        <div className="lg:col-start-1 lg:row-start-5 row-span-1 py-5 w-full ">
          <div className="w-auto py-3 max-w-4xl flex justify-evenly flex-row ">
            <div className=" max-w-lg text-xl md:text-2xl ">
              <a
                href="https://apexstatstraker.netlify.app/"
                target="_blank" rel="noopener noreferrer"
                className="relative inline-flex lg:items-center lg:justify-center px-6 py-3 overflow-hidden font-bold text-white  shadow-2xl group animate-pulse bg-amber-600  hover:bg-orange-700"
              >
                <span className="relative "> Live Site</span>
              </a>
            </div>
            <div className="max-w-lg text-xl md:text-2xl ">
              <a
                href="https://github.com/Iffat77/apex-stat-tracker"
                target="_blank" rel="noopener noreferrer"
                className="relative inline-flex lg:items-center lg:justify-center px-6 py-3 overflow-hidden font-bold text-white shadow-2xl group animate-pulse bg-amber-600  hover:bg-orange-700"
              >
                <span className="relative "> Github Repo </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-1/2 h-1/2">
        <div class="grid grid-rows-6 gap-4">
          <div class="bg-red-500 h-4"></div>
          <div class="bg-blue-500 h-4"></div>
          <div class="bg-green-500 h-4"></div>
          <div class="bg-yellow-500 h-4"></div>
          <div class="bg-purple-500 h-4"></div>
          <div class="bg-pink-500 h-4"></div>
        </div>
      </footer>
    </div>
  );
}

export default ApexStats;
