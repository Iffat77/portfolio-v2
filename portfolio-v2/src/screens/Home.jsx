import React from "react";
// import { Link } from
// import "./home.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <div className="py-12 px-6 w-screen h-screen dark:bg-gray-700 dark:text-white ">
      <div className=" p-10 top-0 left-0 right-0 bottom-auto w-auto">
        <h2 className=" font-font-work  text-5xl py-3 text-white">
          Full Stack <br></br> Developer
        </h2>
        <p className="w-auto max-w-lg text-xl md:text-2xl py-6 leading-8">
          I'm a software engineer based in NYC. Currently I'm a teaching
          assistant at General Assembly helping others learn full stack
          development!
        </p>
        
      </div>
    </div>
  );
}
