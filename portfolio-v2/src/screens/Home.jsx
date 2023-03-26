import React from "react";
// import { Link } from
// import "./home.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ObjectVisualization from "../components/ObjectVisualization";
import StackVisualization from "../components/StackVisualization";
import { NavLink } from "react-router-dom";

const myObject = {
  name: "Iffat Hossain",
  city: "New York",
  hobbies: ["Building Software", "Watching Formula 1"],
  skills: {
    stacks: "MERN",
    languages: ["Javascript", "Python"],
    databases: ["MongoDB", "Postgresql"],
    frameworks: ["Reactjs", "Django"],
  },
};

export default function Home() {
  return (
    <div className=" snap-y snap-mandatory h-screen w-screen mx:auto overflow-x-hidden">
      <div className="pt-28 px-2 md:px-6 w-screen h-screen dark:bg-[#171614] dark:text-white snap-start">
        <section className="h-full mt-8 p-10 top-0 left-0 right-0 bottom-auto w-auto ">
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
          <div className="pt-24 px-6 ">
            <h2 className="font-font-work text-4xl md:text-5xl lg:pl-8 py-6 dark:text-white">
              While I've got you here lets interact
            </h2>

            <p className="w-auto max-w-lg text-xl md:text-2xl lg:pl-8 py-6 leading-10">
              Feel free to have a look at the quick info object to learn about
              myself and technologies I'm familiar with.
            </p>
          </div>
          <div className="mt-4 lg:pl-8">
            <ObjectVisualization data={myObject} />
          </div>
        </section>
      </div>

      {/* <div className="dark:bg-[#1E0A16] bg-[#b0c0bc] dark:text-white ">
        <section className="sm:px-6 h-auto ">
          <div className="pt-24 px-6">
            <h2 className="font-font-work text-4xl md:text-5xl lg:pl-8 py-6 dark:text-white">
              Below is my stack presented to you inside a stack
            </h2>

            <p className="w-auto max-w-lg text-xl md:text-2xl lg:pl-8 py-6 leading-10">
              Push the buttons <br></br>
            </p>
          </div>

          <div className="pt-20 lg:pl-8">
            <StackVisualization />
          </div>
        </section>
      </div> */}

      <div className="dark:bg-[#04141E] bg-white dark:text-white snap-start ">
        <section className=" pt-24 px-6 h-screen overflow-auto ">
          <div className="pt-24 px-6 ">
            <h2 className="font-font-work text-4xl md:text-5xl lg:pl-8 py-6 dark:text-white">
              View my work
            </h2>

            <p className="w-auto max-w-lg text-xl md:text-2xl lg:pl-8 py-6 leading-10">
              Im always working on improving my skills and trying new
              technologies. <br></br>
            </p>
            <div className="pt-20 w-auto max-w-lg text-xl md:text-2xl lg:pl-8 py-6 leading-10">
              <a
                href="/projects"
                className="relative inline-flex items-center rounded-md justify-center px-6 py-3 overflow-hidden font-bold text-white shadow-2xl group animate-pulse bg-green-600 hover:bg-green-800"
              >
                <span className="relative "> Projects</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="pt-24 px-6 ">
          <h2 className="font-font-work text-4xl md:text-5xl lg:pl-8 py-6 dark:text-white">
              Learn more about me, or keep scrolling
            </h2>

            <div className="pt-20 w-auto max-w-lg text-xl md:text-2xl lg:pl-8 py-6 leading-10 flex flex-row justify-between">
              <div className=" max-w-lg text-xl md:text-2xl ">
                <NavLink to='/about'>
                <h1
                  className="relative inline-flex lg:items-center lg:justify-center px-6 py-3 overflow-hidden font-bold text-white  shadow-2xl group animate-pulse bg-green-600 hover:bg-green-800"
                >
                  <span className="relative ">About</span>
                </h1>


                </NavLink>
              </div>
              <div className="max-w-lg text-xl md:text-2xl ">
                <a
                  href="/resume"
                  className="relative inline-flex lg:items-center lg:justify-center px-6 py-3 overflow-hidden font-bold text-white shadow-2xl group animate-pulse bg-green-600 hover:bg-green-800"
                >
                  <span className="relative "> Resume </span>
                </a>
              </div>
            </div>
          </div> */}

      {/* <div className="dark:bg-[#04141E] bg-[#b0c0bc] dark:text-white snap-start "></div> */}
    </div>
  );
}
