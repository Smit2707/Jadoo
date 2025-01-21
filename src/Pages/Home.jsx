import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";
// import abc from "../assets/Traveller 1.png"

import Button from '../Components/Button'

const Page1 = () => {
  return (
    <div className='min-h-[80vh] mt-10  w-full flex-col md:flex lg:flex-row px-4 sm:px-6 lg:px-8'>
      <div className='left w-full lg:w-1/2 flex flex-col md:justify-start md:gap-2 space-y-6 py-8 lg:py-20'>
        <h3 className='text-base sm:text-lg lg:text-2xl font-semibold text-center lg:text-start text-orange-600'>
          Best Destinations around the world
        </h3>
        <div>
          <h1 className='mb-2 w-[90%] text-[#030000] text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center lg:text-start font-bold'>
            {/* Travel,
            <p className='text-orange-600 font-extrabold pb-2 mx-2'>Enjoy</p>
            and live a */}
            Travel, <span className='text-orange-600 font-extrabold inline pb-2 mb-2'>Enjoy</span>  and live a new and full life.
          </h1>
        </div>
        <h3 className='text-sm sm:text-base text-center lg:text-start text-slate-600 max-w-2xl lg:max-w-none px-4 lg:px-0'>
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
        </h3>
        <div className='flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start'>
          <Button name="Find Out More" bg="bg-orange-400" hw="rounded-md" />
          <div className='flex items-center gap-4'>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <button className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-orange-500 hover:shadow-lg hover:shadow-orange-300 bg-opacity-20 flex items-center justify-center group hover:scale-110 transition-all">
                  <FaPlay className="text-[#fff] text-lg ml-1" />
                  {/* <IoPlayOutline  className="text-[#fff] text-lg ml-1" /> */}
                </div>
                <span className="text-gray-600 font-medium">Play Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-full mt-8 lg:mt-0">
        <img
          className='absolute hidden lg:block lg:right-[50%] lg:h-56 lg:w-56 animate-pulse'
          src="/assets/plane.png"
          alt="plane"
        />
        <img
          className='w-full h-full object-contain px-4 sm:px-8 lg:absolute lg:h-[700px] lg:top-[8%] lg:right-1/5 lg:object-cover'
          src="/assets/Traveller 1.png"
          alt="traveller"
        />
      </div>
    </div>
  )
}

export default Page1