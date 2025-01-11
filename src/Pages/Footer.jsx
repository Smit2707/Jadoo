import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full bg-white py-4 sm:py-12 px-4 md:px-8 lg:px-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-8'>
          <div className='col-span-3 sm:col-span-3 lg:col-span-2 mb-2 sm:mb-0'>
            <h2 className='text-lg sm:text-3xl font-bold text-[#181E4B] text-center sm:text-left'>
              Jadoo.
            </h2>
            <p className='text-[10px] sm:text-sm text-gray-500 max-w-xs text-center sm:text-left mx-auto sm:mx-0 mt-1 sm:mt-4'>
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div className='space-y-1 sm:space-y-4'>
            <h3 className='text-sm sm:text-xl font-bold text-black text-center sm:text-left'>
              Company
            </h3>
            <ul className='space-y-0.5 sm:space-y-2 text-center sm:text-left'>
              <li><a href="#about" className='text-[10px] sm:text-sm text-gray-600'>About</a></li>
              <li><a href="#careers" className='text-[10px] sm:text-sm text-gray-600'>Careers</a></li>
              <li><a href="#mobile" className='text-[10px] sm:text-sm text-gray-600'>Mobile</a></li>
            </ul>
          </div>

          <div className='space-y-1 sm:space-y-4'>
            <h3 className='text-sm sm:text-xl font-bold text-black text-center sm:text-left'>
              Contact
            </h3>
            <ul className='space-y-0.5 sm:space-y-2 text-center sm:text-left'>
              <li><a href="#help" className='text-[10px] sm:text-sm text-gray-600'>Help/FAQ</a></li>
              <li><a href="#press" className='text-[10px] sm:text-sm text-gray-600'>Press</a></li>
              <li><a href="#affiliates" className='text-[10px] sm:text-sm text-gray-600'>Affiliates</a></li>
            </ul>
          </div>

          <div className='space-y-1 sm:space-y-4'>
            <h3 className='text-sm sm:text-xl font-bold text-black text-center sm:text-left'>
              More
            </h3>
            <ul className='space-y-0.5 sm:space-y-2 text-center sm:text-left'>
              <li><a href="#airlinefees" className='text-[10px] sm:text-sm text-gray-600'>Airlinefees</a></li>
              <li><a href="#airline" className='text-[10px] sm:text-sm text-gray-600'>Airline</a></li>
              <li><a href="#tips" className='text-[10px] sm:text-sm text-gray-600'>Low fare tips</a></li>
            </ul>
          </div>
        </div>
        <div className='mt-4 sm:mt-12 flex justify-between items-center px-2'>
          <div className='flex space-x-3 sm:space-x-6'>
            <a href="#" className='w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center'>
              <FaFacebookF className='text-gray-600 text-xs sm:text-base' />
            </a>
            <a href="#" className='w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center'>
              <FaInstagram className='text-gray-600 text-xs sm:text-base' />
            </a>
            <a href="#" className='w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center'>
              <FaTwitter className='text-gray-600 text-xs sm:text-base' />
            </a>
          </div>

          <div className='flex items-center space-x-2'>
            <a href="#" className='h-6 sm:h-10'>
              <img
                src="/assets/Google Play.png"
                alt="Get it on Google Play"
                className='h-full'
              />
            </a>
            <a href="#" className='h-6 sm:h-10'>
              <img
                src="/assets/Play Store.png"
                alt="Download on App Store"
                className='h-full'
              />
            </a>
          </div>
        </div>

        <div className='mt-3 sm:mt-12 text-center'>
          <p className='text-[10px] sm:text-sm text-gray-500'>All rights reserved@jadoo.co</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 