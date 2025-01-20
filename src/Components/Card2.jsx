import React from 'react'

const Card2 = ({ image, city, country, price, duration }) => {
    return (
        <div className='w-[280px] bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 duration-300 ease-in-out cursor-pointer'>
            {/* Image Container */}
            <div className='w-full h-[300px] overflow-hidden'>
                <img 
                    src={image} 
                    alt={`${city}, ${country}`} 
                    className="w-[600px] h-[600px] object-cover rounded-t-3xl"
                    style={{ objectPosition: 'center center' }}
                />
            </div>
            
            {/* Content Container */}
            <div className='p-5 space-y-4'>
                {/* Location and Price Row */}
                <div className='flex justify-between items-center'>
                    <h3 className='text-sm md:text-base font-medium text-gray-800'>{city}, {country}</h3>
                    <span className='font-semibold text-gray-800'>${price}k</span>
                </div>
                
                {/* Duration Row */}
                <div className='flex items-center gap-2 text-gray-600'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span className='text-xs'>{duration} Days Trip</span>
                </div>
            </div>
        </div>
    )
}

export default Card2

// Example usage in parent component:
// <Card2 
//     image="/assets/rome.jpg"
//     city="Rome"
//     country="Italy"
//     price="5.42"
//     duration="10"
// />