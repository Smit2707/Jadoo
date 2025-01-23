import React, { useState } from 'react'
import decore from '/assets/Decore.png'
import logo from '/Jadoo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <nav className='container mx-auto px-6 py-6'>
                    <img 
                        className='absolute z-[-1] top-0 right-0 md:w-[45%] w-full h-screen md:h-auto object-cover' 
                        src={decore} 
                        alt="" 
                    />
                <div className="flex justify-between items-center relative">
                    {/* Background decoration */}

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img 
                            className='h-8 w-auto' 
                            src={logo}  
                            alt="Jadoo" 
                        />
                    </div>

                    {/* Mobile/Tablet menu button - Show on all screens except large */}
                    <div className="block xl:hidden">
                        <button 
                            className='text-black hover:bg-gray-100 p-2 rounded-md'
                            onClick={toggleMenu}
                        >
                            <svg 
                                fill='none' 
                                stroke='currentColor' 
                                strokeLinecap='round' 
                                strokeLinejoin='round'
                                strokeWidth={2} 
                                viewBox='0 0 24 24' 
                                className='w-6 h-6'
                            >
                                <path d='M4 6h16M4 12h16M4 18h16'></path>
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation - Only show on large screens */}
                    <div className="hidden xl:flex xl:items-center xl:space-x-8">
                        <a href="#" className='text-base hover:text-orange-400 transition-colors'>Destinations</a>
                        <a href="#" className='text-base hover:text-orange-400 transition-colors'>Hotels</a>
                        <a href="#" className='text-base hover:text-orange-400 transition-colors'>Flights</a>
                        <a href="#" className='text-base hover:text-orange-400 transition-colors'>Bookings</a>
                        <a href="#" className='text-base hover:text-orange-400 transition-colors'>Login</a>
                        <a href="#" className='text-base border border-black rounded-md px-4 py-2 hover:text-orange-400 hover:border-orange-400 transition-colors'>Sign up</a>
                        <select className='text-base bg-transparent border-none outline-none cursor-pointer hover:text-orange-400 transition-colors'>
                            <option value="english">English</option>
                            <option value="french">French</option>
                            <option value="hindi">Hindi</option>
                        </select>
                    </div>
                </div>

                {/* Mobile/Tablet Menu - Show on all screens except large when menu is open */}
                {isMenuOpen && (
                    <div className="xl:hidden mt-4">
                        <div className="bg-[#FFF1DA] shadow-lg rounded-lg overflow-hidden">
                            <a href="#" className="block px-4 py-3 text-base hover:bg-gray-50">Destinations</a>
                            <a href="#" className="block px-4 py-3 text-base hover:bg-gray-50">Hotels</a>
                            <a href="#" className="block px-4 py-3 text-base hover:bg-gray-50">Flights</a>
                            <a href="#" className="block px-4 py-3 text-base hover:bg-gray-50">Bookings</a>
                            <a href="#" className="block px-4 py-3 text-base hover:bg-gray-50">Login</a>
                            <a href="#" className="block px-4 py-3 text-base hover:bg-gray-50">Sign up</a>
                            <select className="block w-full px-4 py-3 text-base bg-transparent border-none outline-none cursor-pointer">
                                <option value="english">English</option>
                                <option value="french">French</option>
                                <option value="hindi">Hindi</option>
                            </select>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Header