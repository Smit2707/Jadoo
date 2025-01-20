import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w-full bg-white py-8 px-4 sm:px-6 lg:px-8 mt-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Main Row Layout */}
        <div className='flex flex-wrap md:justify-between justify-center items-start gap-8'>
          {/* Logo and Description */}
          <div className='max-w-[200px]'>
            <h2 className='text-2xl font-bold text-[#181E4B] mb-2 text-center md:text-start'>Jadoo.</h2>
            <p className='text-sm text-gray-500'>
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          <div className=' flex w-fit gap-6 md:gap-24'>
            {/* Company Links */}
            <div>
              <h3 className='text-xl font-medium text-black mb-2'>Company</h3>
              <ul className='space-y-2'>
                <li><a href="#about" className='text-gray-600 hover:text-gray-900 text-sm'>About</a></li>
                <li><a href="#careers" className='text-gray-600 hover:text-gray-900 text-sm'>Careers</a></li>
                <li><a href="#mobile" className='text-gray-600 hover:text-gray-900 text-sm'>Mobile</a></li>
              </ul>
            </div>

            {/* Contact Links */}
            <div>
              <h3 className='text-xl font-medium text-black mb-2'>Contact</h3>
              <ul className='space-y-2'>
                <li><a href="#help" className='text-gray-600 hover:text-gray-900 text-sm'>Help/FAQ</a></li>
                <li><a href="#press" className='text-gray-600 hover:text-gray-900 text-sm'>Press</a></li>
                <li><a href="#affiliates" className='text-gray-600 hover:text-gray-900 text-sm'>Affilates</a></li>
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h3 className='text-xl font-medium text-black mb-2'>More</h3>
              <ul className='space-y-2'>
                <li><a href="#airlinefees" className='text-gray-600 hover:text-gray-900 text-sm'>Airlinefees</a></li>
                <li><a href="#airline" className='text-gray-600 hover:text-gray-900 text-sm'>Airline</a></li>
                <li><a href="#tips" className='text-gray-600 hover:text-gray-900 text-sm'>Low fare tips</a></li>
              </ul>
            </div>
          </div>


          <div className='space-y-4'>
            <div className='flex space-x-4 w-full justify-center'>
              <a href="#" className='w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100'>
                <FaFacebookF className='text-gray-600' />
              </a>
              <a href="#" className='w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100'>
                <FaInstagram className='text-gray-600' />
              </a>
              <a href="#" className='w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-100'>
                <FaTwitter className='text-gray-600' />
              </a>
            </div>
            <p className='text-sm text-center'>Discover our app</p>
            <div className='flex gap-2'>
              <img src="/assets/Google Play.png" alt="Google Play" className='h-8' />
              <img src="/assets/Play Store.png" alt="App Store" className='h-8' />
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