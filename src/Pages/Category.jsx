import React from 'react'
import Card from '../Components/Card'

const Page2 = () => {
    return (
        <div className='w-full py-16 px-4 sm:px-6 lg:px-8 relative'>
            <img 
                className='hidden lg:block absolute h-24 w-24 lg:h-32 lg:w-32 right-0 top-[10%]' 
                src="./public/assets/Group4.png" 
                alt="" 
            />
            
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12'>
                    <h5 className='text-base sm:text-lg font-semibold text-slate-700 uppercase mb-2'>
                        category
                    </h5>
                    <h3 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-black'>
                        We Offer Best Services
                    </h3>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center relative'>
                    <img 
                        className='absolute hidden lg:block left-1/4 -bottom-10 rotate-0 z-10' 
                        src="/assets/Rectangle 157.png" 
                        alt="" 
                    />
                    
                    <div className='flex justify-center w-full max-w-xs'>
                        <Card 
                            img="/assets/Group48.png" 
                            title="Calculated Weather" 
                            desc="Built Wicket longer admire do barton vanity itself do in it." 
                        />
                    </div>
                    <div className='flex justify-center w-full max-w-xs z-20'>
                        <Card 
                            img="/assets/Group 49.png" 
                            title="Best Flights" 
                            desc="Engrossed listening. Park gate sell they west hard for the." 
                        />
                    </div>
                    <div className='flex justify-center w-full max-w-xs'>
                        <Card 
                            img="/assets/Group 50.png" 
                            title="Local Events" 
                            desc="Barton vanity itself do in it. Preferd to men it engrossed listening." 
                        />
                    </div>
                    <div className='flex justify-center w-full max-w-xs'>
                        <Card 
                            img="/assets/Group 51.png" 
                            title="Customization" 
                            desc="We deliver outsourced aviation services for military customers" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page2