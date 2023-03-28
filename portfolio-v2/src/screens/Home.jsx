import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ObjectVisualization from "../components/ObjectVisualization";
import { NavLink } from "react-router-dom";

const myObject = {
  name: "Iffat Hossain",
  city: "New York",
  hobbies: ["Building Software", "Watching Formula 1"],
  skills: {
    stacks: "MERN",
    languages: ["Javascript", "Python"],
    databases: ["MongoDB", "Postgresql"],
    frameworks: ["Reactjs", "Django", "Tailwind CSS"],
  },
};

export default function Home() {
  return (
    <div className=" snap-y snap-mandatory h-screen w-screen mx:auto overflow-x-hidden">
      <div className="pt-28 md:px-6 w-screen h-screen dark:bg-[#171614] dark:text-white snap-start">
        <section className="h-full sm:mt-8 p-10 top-0 left-0 right-0 bottom-auto w-auto ">
          <div className="block">
            <h2 className="font-font-work text-5xl md:text-7xl lg:pl-8 py-3 dark:text-white">
              Full Stack <br></br> Developer
            </h2>
            <p className="w-auto max-w-lg text-xl md:text-2xl lg:pl-8 py-6 leading-10">
              I'm a software engineer based in NYC. Currently I'm a teaching
              assistant at General Assembly helping others learn full stack
              development!
            </p>
            <div className=" flex w-auto max-w-lg flex-row justify-stat lg:pl-8 gap-4 text-4xl md:text-5xl">
              <a
                href="https://github.com/Iffat77"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/iffathossaindev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="dark:bg-[#1E0A16] bg-[#b0c0bc] dark:text-white snap-start">
        <section className=" pt-24 px-6 h-screen overflow-auto ">
          <div className="sm:pt-24 px-2 ">
            <h2 className="font-font-work text-4xl md:text-5xl lg:pl-8 py-6 dark:text-white">
              While I've got you here lets interact
            </h2>

            <p className="w-auto max-w-lg text-xl md:text-2xl lg:pl-8 py-6 leading-10">
              Feel free to have a look at the quick info object to learn about
              myself and technologies I'm familiar with.
            </p>
          </div>
          <div className="mt-4 pl-1 lg:pl-10">
            <ObjectVisualization data={myObject} />
          </div>
        </section>
      </div>

      <div className="dark:bg-[#04141E] bg-white dark:text-white snap-start ">
        <section className=" pt-24 px-6 h-screen overflow-auto ">
          <div className="sm:pt-24 px-2 ">
            <h2 className="font-font-work text-4xl md:text-5xl lg:pl-8 py-6 dark:text-white">
              View my work
            </h2>

            <p className="w-auto max-w-lg text-xl md:text-2xl lg:pl-8 py-6 leading-10">
              Im always working on improving my skills and trying new
              technologies. <br></br>
            </p>
            <div className="pt-20 w-auto max-w-lg text-xl md:text-2xl lg:pl-8 py-6 leading-10">
              <NavLink
                to="/projects"
                className="relative inline-flex items-center rounded-md justify-center px-6 py-3 overflow-hidden font-bold text-white group animate-pulse bg-green-600 hover:bg-green-800 shadow-gray-500 shadow-md dark:shadow-none"
              >
                <span className="relative "> Projects</span>
              </NavLink>
            </div>
            <div className="pt-20 w-auto max-w-lg text-xl md:text-2xl lg:pl-8 py-6 leading-10">
              <a
                href='mailto:iffathossain77@gmail.com' target="_blank"
                className="relative inline-flex items-center rounded-md justify-center px-6 py-3 overflow-hidden font-bold text-white group animate-pulse bg-green-600 hover:bg-green-800 shadow-gray-500 shadow-md dark:shadow-none"
              >
                <span className="relative "> Contact</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
