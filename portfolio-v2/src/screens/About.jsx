import React from "react";

function About() {
  return (
    <div className="h-screen w-full dark:bg-gray-700 dark:text-gray-300">
      <div className="pt-28 px-6 w-screen h-screen dark:bg-[#04141E] dark:text-white">
        <section className="h-full mt-8 p-10 top-0 left-0 right-0 bottom-auto w-auto">
          <div className="block">
            <h2 className="font-font-work text-5xl md:text-7xl lg:pl-8 py-3 dark:text-white">
              A Bit <br></br> About Me
            </h2>
            <p className="w-auto max-w-lg text-xl md:text-2xl lg:pl-8 py-6 leading-8">
              I'm a software engineer based in NYC. Currently I'm a teaching
              assistant at General Assembly helping others learn full stack
              development!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
