import React from 'react'
import { FaPlay } from "react-icons/fa";
import Button from '../Components/Button'

const Page1 = () => {
  return (
    <div className='min-h-[80vh] mt-10  w-full flex-col md:flex lg:flex-row px-4 sm:px-6 lg:px-8'>
      <div className='left w-full lg:w-1/2 flex flex-col md:justify-start md:gap-8 space-y-6 py-8 lg:py-20'>
        <h3 className='text-base sm:text-lg lg:text-2xl font-semibold text-center lg:text-start text-orange-600'>
          Best Destinations around the world
        </h3>
        <h1 className='text-[#030000] text-3xl sm:text-4xl lg:text-7xl text-center lg:text-start font-bold leading-tight'>
          Travel, <span className='text-orange-600 font-extrabold'>Enjoy</span> and live a new and full life.
        </h1>
        <h3 className='text-sm sm:text-base text-center lg:text-start text-slate-600 max-w-2xl lg:max-w-none px-4 lg:px-0'>
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
        </h3>
        <div className='flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start'>
          <Button name="Find Out More" bg="bg-orange-400" hw="rounded-md"/>
          <div className='flex items-center gap-4'>
            <Button name="Play Demo" bg="bg-red-400" hw="h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>
      <div className="right w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-full mt-8 lg:mt-0">
        <img 
          className='absolute hidden lg:block lg:right-[50%] lg:h-56 lg:w-56 animate-pulse' 
          src="./assets/plane.png" 
          alt="plane" 
        />
        <img 
          className='w-full h-full object-contain px-4 sm:px-8 lg:absolute lg:h-[700px] lg:top-[8%] lg:right-1/5 lg:object-cover' 
          src="./assets/Traveller 1.png" 
          alt="traveller" 
        />
      </div>
    </div>
  )
}

export default Page1