import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full py-8 px-4 sm:px-6 lg:px-0 mt-20'>
      <div className='w-full'>
        {/* Main Row Layout */}
        <div className='flex w-full flex-wrap md:justify-around justify-center items-start gap-8'>
          {/* Logo and Description */}
          <div className='max-w-[200px]'>
            <h2 className='text-2xl md:text-4xl font-bold text-[#181E4B] mb-2 text-center md:text-start'>Jadoo.</h2>
            <p className='text-sm md:text-base text-gray-500'>
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div className=' flex w-fit gap-6 md:gap-24'>
            {/* Company Links */}
            <div>
              <h3 className='text-lg font-semibold text-black mb-2'>Company</h3>
              <ul className='space-y-2'>
                <li><a href="#about" className='text-gray-600 hover:text-gray-900 text-sm md:text-base'>About</a></li>
                <li><a href="#careers" className='text-gray-600 hover:text-gray-900 text-sm md:text-base'>Careers</a></li>
                <li><a href="#mobile" className='text-gray-600 hover:text-gray-900 text-sm md:text-base'>Mobile</a></li>
              </ul>
            </div>

            {/* Contact Links */}
            <div>
              <h3 className='text-lg font-semibold text-black mb-2'>Contact</h3>
              <ul className='space-y-2'>
                <li><a href="#help" className='text-gray-600 hover:text-gray-900 text-sm md:text-base'>Help/FAQ</a></li>
                <li><a href="#press" className='text-gray-600 hover:text-gray-900 text-sm md:text-base'>Press</a></li>
                <li><a href="#affiliates" className='text-gray-600 hover:text-gray-900 text-sm md:text-base'>Affilates</a></li>
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h3 className='text-lg font-semibold text-black mb-2'>More</h3>
              <ul className='space-y-2'>
                <li><a href="#airlinefees" className='text-gray-600 hover:text-gray-900 text-sm md:text-base'>Airlinefees</a></li>
                <li><a href="#airline" className='text-gray-600 hover:text-gray-900 text-sm md:text-base'>Airline</a></li>
                <li><a href="#tips" className='text-gray-600 hover:text-gray-900 text-sm md:text-base'>Low fare tips</a></li>
              </ul>
            </div>
          </div>


          <div className='space-y-4'>
            <div className='flex space-x-4 w-full justify-center'>
              <a href="#" className='w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-gray-100'>
                <FaFacebookF className='text-gray-600' />
              </a>
              <a href="#" className='w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-gray-100'>
                <FaInstagram className='text-gray-600' />
              </a>
              <a href="#" className='w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-gray-100'>
                <FaTwitter className='text-gray-600' />
              </a>
            </div>
            <p className='text-sm text-center'>Discover our app</p>
            <div className='flex gap-2'>
              <img src="./public/assets/Google Play.png" alt="Google Play" className='h-8' />
              <img src="./public/assets/Play Store.png" alt="App Store" className='h-8' />
            </div>
          </div>
        </div>


        <div className='mt-12 text-center'>
          <p className='text-sm text-gray-500'>All rights reserved@jadoo.co</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;