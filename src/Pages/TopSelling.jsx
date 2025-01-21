import React from 'react'
import Card2 from '../Components/Card2'

const Page3 = () => {
    return (
        <div className='w-full py-16 px-4 sm:px-6 lg:px-8 relative'>
            <img 
                className='hidden lg:block absolute right-0 top-1/3 h-[150px] sm:h-[200px]' 
                src="/assets/Decore2.png" 
                alt="" 
            />
            
            <div className='text-center mb-12'>
                <h5 className='text-base sm:text-lg font-semibold text-slate-700 uppercase mb-2'>
                    Top Selling
                </h5>
                <h3 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-black'>
                    Top Destinations
                </h3>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='w-full flex justify-center'>
                    <Card2 
                        city="Ahmedabad" 
                        country="India" 
                        price="100" 
                        duration="10" 
                        image="/assets/desc1.png" 
                    />
                </div>
                <div className='w-full flex justify-center'>
                    <Card2 
                        city="London" 
                        country="UK" 
                        price="100" 
                        duration="12" 
                        image="/assets/desc2.png" 
                    />
                </div>
                <div className='w-full flex justify-center'>
                    <Card2 
                        city="London" 
                        country="Europe" 
                        price="100" 
                        duration="15" 
                        image="/assets/desc3.png" 
                    />
                </div>
                <div className='w-full flex justify-center'>
                    <Card2 
                        city="London" 
                        country="UK" 
                        price="100" 
                        duration="12" 
                        image="/assets/desc2.png" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Page3
