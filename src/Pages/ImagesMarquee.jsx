import React from 'react'

const Section = () => {
  return (
    <div className='w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-7xl mx-auto'>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-center'>
          
          <div className='flex justify-center items-center p-4'>
            <img 
              src="/assets/image 27.png" 
              alt="Axon" 
              className='h-18 sm:h-10 lg:h-28 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300'
            />
          </div>

          <div className='flex justify-center items-center p-4'>
            <img 
              src="/assets/image 28.png" 
              alt="Jetstar" 
              className='h-18 sm:h-10 lg:h-28 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300'
            />
          </div>

          <div className='flex justify-center items-center p-4'>
            <img 
              src="/assets/image 29.png" 
              alt="Expedia" 
              className='h-18 sm:h-10 lg:h-28 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300'
            />
          </div>

          <div className='flex justify-center items-center p-4'>
            <img 
              src="/assets/image 30.png" 
              alt="Qantas" 
              className='h-8 sm:h-10 lg:h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300'
            />
          </div>

          <div className='flex justify-center items-center p-4 col-span-2 sm:col-span-1'>
            <img 
              src="/assets/image 31.png" 
              alt="Alitalia" 
              className='h-8 sm:h-10 lg:h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section 