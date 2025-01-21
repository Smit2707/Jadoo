import React from 'react';
import { IoMdSend } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";


const Subscription = () => {
  return (
    <div className="w-full min-h-[40vh] relative">
      
      <div className="max-w-[1300px] mx-auto bg-[#DFD7F9] bg-opacity-20 rounded-[20px] py-[78px] px-8 relative">
      <img className="absolute hidden md:block bottom-0 left-[0%] z-[0] opacity-[0.1]" src="./src/assets/curve.png" alt="" />
      <img className="absolute hidden md:block right-[0%] top-0 z-[1]" src="./src/assets/cr2.png" alt="" />
        {/* Send icon in top-right corner */}
        <div className="absolute -top-6 -right-8">
          <div className="w-[70px] h-[70px] bg-gradient-to-r from-violet-500 to-violet-400 hidden md:block rounded-full md:flex items-center justify-center relative">
            {/* <IoMdSend className="text-white text-3xl" /> */}
            {/* <FaLocationArrow className="text-white text-3xl" /> */}
            <img className='h-11 w-11 text-white absolute right-3 top-3' src="./src/assets/send.png" alt="" />

          </div>
        </div>

        {/* Content */}
        <div className="max-w-[881px] mx-auto">
          <h2 className="text-[#5E6282] text-lg md:text-[33px] text-center font-[600] md:leading-[54px] mb-[74px]">
            Subscribe to get information, latest news and other interesting offers about Jadoo
          </h2>

          {/* Form */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="relative w-full max-w-[421px]">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <svg 
                  className="h-6 w-6 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full h-[58px] pl-16 pr-6 rounded-[10px] bg-white focus:outline-none text-base"
              />
            </div>
            <button className="md:w-[180px] md:h-[58px] px-5 py-3 bg-[#FF946D] text-white font-[600] rounded-[10px] hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>

        {/* Decorative plus signs */}
        <div className="absolute top-12 left-8">
          <span className="text-[#747DEF] text-4xl opacity-30">+</span>
        </div>
        <div className="absolute bottom-12 right-8">
          <span className="text-[#747DEF] text-4xl opacity-30">+</span>
        </div>
      </div>
    </div>
  );
};

export default Subscription;