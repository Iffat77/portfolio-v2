import React from 'react'

function AqBot() {
  return (
    <div className="h-screen w-screen bg-amber-50 dark:bg-[#04141E] dark:text-gray-300 overflow-auto">
      <div className="pt-28 px-6 w-full h-full dark:text-white grid grid-cols-1 grid-rows-5 lg:grid-cols-2 lg:grid-rows-3 md:gap-4 ">
        <section className="row-span-3 lg:row-start-2 lg:row-span-2 h-full w-full rounded-md bg-airbot bg-no-repeat bg-cover bg-center"></section>
        <h2 className="font-font-work justify-self-center place-self-center row-span-1 lg:col-span-2 lg:row-span-1 text-4xl md:text-6xl lg:pl-8 pt-3 dark:text-white">
          AirQual Twitter Bot
        </h2>
        <p className="w-auto row-span-2 py-3 max-w-4xl text-lg md:text-xl mx-4 lg:pl-8 leading-8 h-full">
          
        </p>
      </div>
    </div>
  )
}

export default AqBot