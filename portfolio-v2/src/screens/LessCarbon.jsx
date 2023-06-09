import React from "react";

function LessCarbon() {
  return (
    <div className="h-screen w-screen dark:bg-[#04141E]  dark:text-gray-300 overflow-auto">
      <div className="pt-28 px-6 dark:text-white flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-5">
        <section className="sm:row-span-2 basis-96 lg:row-start-2 lg:row-span-3 h-2/3 w-full rounded-md bg-lesscarbon bg-no-repeat bg-cover shadow-md"></section>
        <div className=" font-font-kanit justify-self-center place-self-center row-span-1 lg:col-span-2 lg:row-span-1 text-4xl md:text-6xl lg:pl-8 pt-3 dark:text-white">
          <h2 className="">Less Carbon</h2>
        </div>
        <div className="lg:row-start-2 row-span-1">
          <h2 className="font-font-work text-2xl w-auto mx-4 lg:pl-8">
            Summary
          </h2>
          <p className="w-auto py-3 max-w-4xl text-lg md:text-xl mx-4 lg:pl-8 leading-8 h-full">
            Less Carbon is a platform and community where users can express themselves and connect with like-minded individuals.
            It provides a space for people to share their voices and engage with others by commenting on articles and even contributing their own written pieces.
          </p>
        </div>
        <div className="lg:py-4 row-span-1">
          <h2 className="font-font-work text-2xl w-auto mx-4 lg:pl-8">
            Challenges
          </h2>
          <p className="w-auto py-3 max-w-4xl text-lg md:text-xl mx-4 lg:pl-8 leading-8 h-full">
            During the development of this application, I made an important observation regarding the article creation process. Initially,
            I used a simple textarea as the form field for users to input their content.
            However, I soon realized that this approach limited users' ability to customize their articles,
            which didn't feel quite right. It prompted me to explore alternative solutions,
            leading me to discover Slate.js—a powerful rich text editor.
            Slate.js offers a highly customizable experience for users as they write,
            allowing them to personalize and enhance their content in various ways.
            This realization inspired me to integrate Slate.js into the application,
            empowering users with a more flexible and engaging writing experience.
          </p>
        </div>

        <div className="lg:col-start-2 lg:row-span-2 lg:py-4 row-span-1">
          <h2 className="font-font-work text-2xl w-auto mx-4 lg:pl-8">
            Solution & Post Mvp
          </h2>

          <p className="w-auto py-3 max-w-4xl text-lg md:text-xl mx-4 lg:pl-8 leading-8 h-full">
            After carefully exploring the documentation of Slate.js, I found it to be the ideal solution for our needs.
            With some dedicated effort, I managed to implement a basic example successfully.
            Currently, my focus is on enhancing the user experience by developing a dedicated toolbar for the existing editor in Less Carbon.
            This toolbar will empower users to unleash their creativity and express themselves freely while creating and formatting their articles.
            I am excited about this upcoming feature and can't wait to see the positive impact it will have on our users' writing experience.
          </p>
        </div>

        <div className="lg:col-start-1 lg:row-start-5 row-span-1 py-5 w-full ">
          <div className="w-auto py-3 max-w-4xl flex justify-evenly flex-row ">
            <div className=" max-w-lg text-xl md:text-2xl ">
              <a
                href="https://less-carbon.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-md inline-flex lg:items-center lg:justify-center px-6 py-3 overflow-hidden font-bold text-white group animate-pulse bg-gray-400 hover:bg-gray-700 shadow-gray-500 shadow-md dark:shadow-none"
              >
                <span className="relative "> Live Site</span>
              </a>
            </div>
            <div className="max-w-lg text-xl md:text-2xl ">
              <a
                href="https://github.com/Iffat77/less-carbon"
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-md inline-flex lg:items-center lg:justify-center px-6 py-3 overflow-hidden font-bold text-white group animate-pulse bg-gray-400 hover:bg-gray-700 shadow-gray-500 shadow-md dark:shadow-none"
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

export default LessCarbon;
