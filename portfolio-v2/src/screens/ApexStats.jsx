import React from "react";

function ApexStats() {


  
  return (
    <div className="h-screen w-screen bg-amber-50 dark:bg-[#04141E] dark:text-gray-300 overflow-auto">
      <div className="pt-28 px-6 w-full h-full dark:text-white grid grid-cols-1 grid-rows-5 lg:grid-cols-2 lg:grid-rows-3 md:gap-4 ">
        <section className="row-span-3 lg:row-start-2 lg:row-span-2 h-full w-full rounded-md bg-hero bg-no-repeat bg-cover bg-center"></section>
        <h2 className="font-font-work justify-self-center place-self-center row-span-1 lg:col-span-2 lg:row-span-1 text-4xl md:text-6xl lg:pl-8 pt-3 dark:text-white">
          Apex Stat Tracker
        </h2>
        <p className="w-auto row-span-2 py-3 max-w-4xl text-lg md:text-xl mx-4 lg:pl-8 leading-8 h-full">
          Apex Stat Tracker as the name suggests, allows users to search for
          Apex Legends players by platform and username. This was an enjoyable
          project to work on for me as Apex was a game I played frequently. My
          biggest challenge while working on this project was encountering and
          overcoming a CORS error. Up until this point, I was following the idea
          of just avoiding CORS however for this project as it was something I
          really wanted to create I had to face this challenge. Initially, I had
          tried some bandaid solutions to be able to run my app locally however
          this wouldn't work in production so after some research I found that I
          could set up a proxy backend to be able to bypass CORS. In hindsight,
          it was fairly simple to implement and was able to solve my biggest
          issue as well as allow me to gain some very valuable knowledge. I am
          currently working on a new iteration of this application to provide
          more information, such as match history as well as new UI.
        </p>
      </div>
    </div>
  );
}

export default ApexStats;
