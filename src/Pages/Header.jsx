import React, { useState } from 'react'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <nav className='px-0 py-2 mt-5 md:px-0'>
                <div className="flex justify-between items-center">

                    {/* deco */}
                    <img className='absolute z-[-1] top-0 right-0 md:right-0 sm:w-[400px] md:w-[50%] md:h-[80%] md:object-cover md:object-bottom' src="./assets/Traveller 1.png" alt="" />

                    {/* logo */}
                    <img className='h-8 w-22 object-cover' src="./assets/logo.png"  alt="logo" />
                    {/* right nav */}
                    <div className="md:hidden">
                        <button className='text-black' onClick={toggleMenu}>
                            <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} viewBox='0 0 24 24' className='w-6 h-6'>
                                <path d='M4 6h16M4 12h16M4 18h16'></path>
                            </svg>
                        </button>
                    </div>
                    <ul className='hidden md:w-[70%] md:flex md:justify-end md:items-center px-2 py-3 md:gap-6 font-medium text-md'>  
                        <li><a href="#" className='text- font-[500] md:text-sm hover:text-orange-400 duration-300 ease-in-out px-5 py-2'>Destinations</a></li>
                        <li><a href="#" className='text- font-[500] md:text-sm hover:text-orange-400 duration-300 ease-in-out px-5 py-2'>Hotels</a></li>
                        <li><a href="#" className='text- font-[500] md:text-sm hover:text-orange-400 duration-300 ease-in-out px-5 py-2'>Flights</a></li>
                        <li><a href="#" className='text- font-[500] md:text-sm hover:text-orange-400 duration-300 ease-in-out px-5 py-2'>Bookings</a></li>
                        <li><a href="#" className='text- font-[500] md:text-sm hover:text-orange-400 duration-300 ease-in-out px-5 py-2'>Login</a></li>
                        <li><a href="#" className='text- font-[500] md:text-sm hover:text-orange-400 duration-300 ease-in-out px-5 py-2 border-[1px] border-black rounded-md hover:border-orange-400 text-center'>Signup</a></li>
                        <div>
                            <select className='border-none outline-none bg-transparent px-2 md:text-sm py-1 font-[500] hover:text-orange-400 duration-300 ease-in-out cursor-pointer' name="Language" id="cars">
                                <option value="english">English</option>
                                <option value="french">French</option>
                                <option value="hindi">Hindi</option>
                            </select>
                        </div>
                    </ul>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen ? (
                    <ul className='flex-col md:hidden bg-[#FFF1DA] rounded-xl'>
                        <li className='py-2 text-center text-black'><a href="#">Destinations</a></li>
                        <li className='py-2 text-center text-black'><a href="#">Hotels</a></li>
                        <li className='py-2 text-center text-black'><a href="#">Flights</a></li>
                        <li className='py-2 text-center text-black'><a href="#">Bookings</a></li>
                        <li className='py-2 text-center text-black'><a href="#">Login</a></li>
                        <li className='py-2 text-center text-black'><a href="#">Signup</a></li>
                    </ul>
                ) : null}
            </nav>
        </>
    )
}

export default Header