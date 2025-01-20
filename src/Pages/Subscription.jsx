import React from 'react';
import { IoMdSend } from "react-icons/io";

const Subscription = () => {
  return (
    <div className="w-full min-h-[40vh] bg-purple-50 rounded-xl flex items-center justify-center relative px-4">
        <img className="absolute hidden md:block bottom-0 left-[0%] z-[0] opacity-[0.1]" src="./public/assets/curve.png" alt="" />
        <img className="absolute hidden md:block right-[0%] top-0 z-[1]" src="./public/assets/cr2.png" alt="" />
      {/* Send icon in top-right of parent div */}
      <div className="absolute -top-6 right-8">
        <div className="w-12 h-12 bg-[#8167f4] rounded-full flex items-center justify-center">
          <IoMdSend className="text-white text-xl" />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8 max-w-3xl">
        <h2 className="text-[#5E6282] text-xl sm:text-2xl text-center max-w-2xl mx-auto font-semibold leading-normal">
          Subscribe to get information, latest news and other interesting offers about Jadoo
        </h2>

        {/* Form */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="relative w-full sm:w-2/3">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg 
                className="h-5 w-5 text-gray-400" 
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
              className="w-full pl-12 pr-4 py-4 rounded-lg bg-white focus:outline-none"
            />
          </div>
          <button className="w-full sm:w-auto px-8 py-4 bg-[#FF946D] text-white font-medium rounded-lg">
            Subscribe
          </button>
        </div>
      </div>

      {/* Decorative plus signs */}
      <div className="absolute top-4 right-4">
        <span className="text-[#6246E5] text-2xl">+</span>
      </div>
      <div className="absolute bottom-4 right-4">
        <span className="text-[#6246E5] text-2xl">+</span>
      </div>
    </div>
  );
};

export default Subscription;