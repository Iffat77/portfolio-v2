import React from "react";

function About() {
  return (
    <div className="h-screen dark:bg-[#04141E] dark:text-gray-300 overflow-auto">
      <div className="pt-28 px-8 dark:bg-[#04141E] dark:text-white ">
        <section className="mt-4 top-0 left-0 right-0 bottom-auto w-auto">
          <div className="block">
            <h2 className="font-font-work text-6xl pt-15 md:text-7xl lg:pl-8 lg:pt-24 py-3 dark:text-white">
              A Bit <br></br> About Me
            </h2>
          </div>
        </section>

        <section className=" md:grid md:grid-cols-2 md:grid-rows-2 md:gap-6 md:px-4 lg:w-5/6 mb-20">
          <div className="col-span-2 row-span-1 pt-20 md:pt-24">
            <p className="w-auto sm:max-w-lg md:max-w-none text-lg md:text-xl lg:pl-8 py-6 leading-8 h-1/2">
              Hey there! I'm Iffat, and I love creating software that people can
              actually use and have fun with. I first got into coding after
              watching "The Social Network" (yup, that movie about Facebook),
              but it wasn't until 2022 that I really got to dive into software
              development. I took this program at General Assembly called the
              Software Engineering Immersive, and let me tell you, it was tough
              - but I learned so much and grew a ton as a person!
              <br></br>
            </p>
          </div>
          <div className="col-span-1 row-span-1">
            <p className="w-auto max-w-lg text-lg md:text-xl lg:pl-8 py-6 leading-8 h-1/2">
              After graduating from the boot camp I was presented with the
              opportunity to work at GA as a teaching assistant. This experience
              has allowed me to focus on my core fundamentals even further so
              that I can help my students in the best capacity. Along with the
              improvement of technical skills I’ve been able to hone my
              communication skills and have learned how to simplify complex
              ideas in an easily digestable manner.
              <br></br>
            </p>
          </div>
          <div className="col-span-1 row-span-1">
            <p className="w-auto max-w-xl text-lg md:text-xl lg:pl-8 py-6 leading-8 h-full">
              Right now, I'm learning all about new tech that I find interesting
              and useful in the real world, so I can get a lot of experience
              under my belt. Plus, I'm always working on my own projects - like
              an app that keeps track of stats for Apex Legends players or
              little Twitter bots. If you want to check out what I'm up to, just
              head over to my projects section or my GitHub profile!
            </p>
          </div>
        </section>
      </div>

    </div>
  );
}

export default About;
