import React from "react";
// import { Link } from
// import "./home.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import ObjectVisualization from "../components/ObjectVisualization";
import StackVisualization from "../components/StackVisualization"
  
const myObject = {
  name: 'Iffat Hossain',
  city: 'New York',
  hobbies: ['Building Software', 'Watching Formula 1'],
  skills: {
    stacks: 'MERN',
    languages: ['Javascript', 'Python', 'Nodejs', 'Mongosh'],
    databases: ['MongoDB', 'Postgresql'],
    frameworks: ['Reactjs', 'Django']
  }
};

export default function Home() {
  return (
    <div>
      <div className="pt-28 px-6 w-screen h-screen dark:bg-[#171614] dark:text-white">
        <section className="h-full mt-8 p-10 top-0 left-0 right-0 bottom-auto w-auto">
          <div className="block">
            <h2 className="font-font-work text-5xl md:text-7xl lg:pl-8 py-3 dark:text-white">
              Full Stack <br></br> Developer
            </h2>
            <p className="w-auto max-w-lg text-xl md:text-2xl lg:pl-8 py-6 leading-8">
              I'm a software engineer based in NYC. Currently I'm a teaching
              assistant at General Assembly helping others learn full stack
              development!
            </p>
          </div>
        </section>
      </div>

      <div className=" w-screen h-screen dark:bg-[#1E0A16] bg-[#b0c0bc] dark:text-white ">
        
        <section className="px-6 h-auto" >
          <div className="pt-20 ">
              <ObjectVisualization data={myObject} />
          </div>
          <div className="pt-20">
          <StackVisualization />
          </div> 

        </section>

      </div>

      <div className=" w-screen h-screen dark:bg-[#1E0A16] bg-[#b0c0bc] dark:text-white ">
        
        <section className="px-6 h-auto " >
          {/* <div className="pt-20">
          <StackVisualization />
          </div>     */}

        </section>

      </div>


    </div>
  );
}
