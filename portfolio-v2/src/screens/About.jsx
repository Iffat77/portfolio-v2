import React from "react";

function About() {
  return (
    <div className="h-screen w-full dark:bg-gray-700 dark:text-gray-300 ">
      <div className="pt-28 px-6 w-screen h-screen dark:bg-[#04141E] dark:text-white overflow-auto">
        <section className="h-full mt-8 p-10 top-0 left-0 right-0 bottom-auto w-auto">
          <div className="block">
            <h2 className="font-font-work text-6xl pt-15 md:text-7xl lg:pl-8 lg:pt-24 py-3 dark:text-white">
              A Bit <br></br> About Me
            </h2>
          </div>
        </section>

        <section className=" md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 md:px-8 lg:w-4/6">
          <div className="col-span-2 row-span-1">
            <p className="w-auto sm:max-w-lg md:max-w-none text-lg md:text-xl lg:pl-8 py-6 leading-8 h-full">
              Hello Everyone! I'm Iffat and I like developing software others
              can use and enjoy. I was first interested in coding when I watched
              a movie called “The Social Network” however was able to pursue my
              own journey into software in 2022. I attended the Software
              Engineering Immersive at General Assembly which challenged me in
              many ways, technically and mentally, but also allowed me to learn
              and grow exponentially.
              <br></br>
            </p>
          </div>
          <div className="col-span-1 row-span-1">
            <p className="w-auto max-w-lg text-lg md:text-xl lg:pl-8 py-6 leading-8 h-full">
              After graduating from the boot camp I was presented with the
              opportunity to work at GA as a teaching assistant. This experience
              has allowed me to focus on my core fundamentals even further so that
              I can help my students in the best capacity. Along with the
              improvement of technical skills I’ve been able to hone my
              communication skills and have learned how to simplify complex
              ideas in an easily digestable manner.
              <br></br>
            </p>
          </div>
          <div className="col-span-1 row-span-1">
            <p className="w-auto max-w-lg text-lg md:text-xl lg:pl-8 py-6 leading-8 h-full">
              I'm currently working on learning new technologies which I not
              only find interesting but also try to find things being used in
              industry to have a wide array of experiences. I also enjoy working
              on my own personal projects, like an app I’ve been working on that
              allows tracking of player stats from the game apex legends or
              smaller projects like creating twitter bots. Of Course if you want
              to check out my projects just head over to the projects section or
              my GitHub!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
