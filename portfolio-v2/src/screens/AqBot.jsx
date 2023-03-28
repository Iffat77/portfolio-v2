import React from "react";

function AqBot() {
  return (
    <div className="h-screen w-screen dark:bg-[#04141E] dark:text-gray-300 overflow-auto">
      <div className="pt-28 px-6  dark:text-white flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-5">
        <section className=" basis-96 lg:row-start-2 lg:row-end-3 xl:row-end-4  rounded-md bg-airbot bg-cover bg-center bg-no-repeat shadow-black shadow-md"></section>

        <div className=" font-font-kanit justify-self-center place-self-center row-span-1 lg:col-span-2 lg:row-span-1 text-4xl md:text-6xl lg:pl-8 pt-3 mb-4 lg:mb-1 dark:text-white">
          <h2 className="">AiQual Twitter Bot</h2>
        </div>
        <div className="lg:row-start-2 row-span-1">
          <h2 className="font-font-work text-2xl w-auto mx-4 lg:pl-8">
            Summary
          </h2>
          <p className="w-auto py-3 max-w-4xl text-lg md:text-xl mx-4 lg:pl-8 leading-8 h-full">
            The idea behind this project was to make a Twitter bot that gives
            users helpful info, specifically about air quality in different
            places. But when I did some research, I found out that there were
            already a bunch of bots doing the same thing, with daily scheduled
            posts for the whole US or each state. That's the way most online
            tutorials showed how to make a bot, too. But I wanted to make
            something more interactive, where users could mention the account,
            use a hashtag, and tell the bot which city they wanted air quality
            for. The problem was, I couldn't find one good guide to show me how
            to make it happen. So, I tried a bunch of different methods until I
            finally got it right. It was a little frustrating at times, but in
            the end, I learned a lot and it was really satisfying.
          </p>
        </div>
        <div className="lg:py-4 lg:row-start-3 lg:col-start-2">
          <h2 className="font-font-work text-2xl w-auto mx-4 lg:pl-8">
            Challenges
          </h2>
          <p className="w-auto py-3 max-w-4xl text-lg md:text-xl mx-4 lg:pl-8 leading-8 h-full">
            One of the biggest headaches I faced while making this bot was
            trying to figure out how to deploy it properly. I had tested it
            locally and everything was working fine, but I knew that wasn't a
            sustainable solution for deployment. So, I did some research and
            found out that a lot of people were using Google Cloud Functions and
            a scheduler to make their bots post on a schedule. But that wasn't
            quite what I needed because my bot had to keep running continuously
            to check for new requests.
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-span-2  row-span-1">
          <h2 className="font-font-work text-2xl w-auto mx-4 lg:pl-8">
            Solution & Post Mvp
          </h2>

          <p className="w-auto py-3 max-w-4xl text-lg md:text-xl mx-4 lg:pl-8 leading-8 h-full">
            So, I did some more digging and found out that I could deploy the
            bot to an AWS EC2 instance and keep it running all the time using a
            process manager like systemd. I'm satisfied with how it's working
            right now, but I would like to improve the experience for the user,
            so I'm already working on a second version that's going to be even
            more straightforward. I've also decided I might as well
            use this as an opportunity to learn how to monitor and analyze some
            the different metrics of my EC2 instance.
          </p>
        </div>

        <div className="lg:col-start-1 lg:row-start-3 xl:row-start-4 py-5 w-full ">
          <div className="w-auto py-3 max-w-4xl flex justify-evenly flex-row ">
            <div className=" max-w-lg text-xl md:text-2xl ">
              <a
                href="https://twitter.com/AirqualBot"
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-md inline-flex lg:items-center lg:justify-center px-6 py-3 overflow-hidden font-bold text-white group animate-pulse bg-sky-600 hover:bg-blue-700 shadow-gray-500 shadow-md dark:shadow-none"
              >
                <span className="relative "> AiqualBot</span>
              </a>
            </div>
            <div className="max-w-lg text-xl md:text-2xl ">
              <a
                href="https://github.com/Iffat77/aqbot/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-md inline-flex lg:items-center lg:justify-center px-6 py-3 overflow-hidden font-bold text-white group animate-pulse bg-sky-600 hover:bg-blue-700 shadow-gray-500 shadow-md dark:shadow-none"
              >
                <span className="relative "> Github Repo </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AqBot;
