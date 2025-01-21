import React, { useState, useRef } from 'react'
import Card from '../Components/Card'

const Page2 = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const redBlockRef = useRef(null);

    const updateRedBlockPosition = (event, cardElement) => {
        if (!cardElement || !redBlockRef.current) return;
        
        const rect = cardElement.getBoundingClientRect();
        const containerRect = cardElement.closest('.max-w-7xl').getBoundingClientRect();
        
        // Calculate position relative to the container
        const leftPosition = rect.left - containerRect.left;
        const topPosition = rect.top - containerRect.top;
        
        redBlockRef.current.style.transform = `translate(${leftPosition - 40}px, ${topPosition + rect.height - 40}px)`;
        redBlockRef.current.style.opacity = '1';
        redBlockRef.current.style.scale = '1';
    };

    const resetRedBlock = () => {
        if (!redBlockRef.current) return;
        redBlockRef.current.style.opacity = '0';
        redBlockRef.current.style.scale = '0';
    };

    return (
        <div className='w-full py-16 px-4 sm:px-6 lg:px-8 relative'>
            <img 
                className='hidden lg:block absolute h-24 w-24 lg:h-32 lg:w-32 right-0 top-[10%]' 
                src="./src/assets/Group4.png" 
                alt="" 
            />
            
            <div className='max-w-7xl mx-auto relative'>
                {/* Red Block - Single instance that moves */}
                <div
                    ref={redBlockRef}
                    className="absolute w-24 h-24 bg-[#DF6951] rounded-2xl transition-all duration-300 ease-in-out opacity-0 scale-0"
                    style={{ zIndex: 0 }}
                />

                <div className='text-center mb-12'>
                    <h5 className='text-base sm:text-lg font-semibold text-slate-700 uppercase mb-2'>
                        category
                    </h5>
                    <h3 className='text-2xl sm:text-3xl lg:text-4xl font-semibold text-black'>
                        We Offer Best Services
                    </h3>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center relative'>
                    {/* <img 
                        className='absolute hidden lg:block left-1/4 -bottom-10 rotate-0 z-10' 
                        src="/assets/Rectangle 157.png" 
                        alt="" 
                    /> */}
                    
                    <div className='flex justify-center w-full max-w-xs'
                         onMouseEnter={(e) => {
                             setHoveredCard(0);
                             updateRedBlockPosition(e, e.currentTarget);
                         }}
                         onMouseLeave={() => {
                             setHoveredCard(null);
                             resetRedBlock();
                         }}>
                        <Card 
                            img="/assets/Group48.png" 
                            title="Calculated Weather" 
                            desc="Built Wicket longer admire do barton vanity itself do in it."
                        />
                    </div>
                    <div className='flex justify-center w-full max-w-xs z-20'
                         onMouseEnter={(e) => {
                             setHoveredCard(1);
                             updateRedBlockPosition(e, e.currentTarget);
                         }}
                         onMouseLeave={() => {
                             setHoveredCard(null);
                             resetRedBlock();
                         }}>
                        <Card 
                            img="/assets/Group 49.png" 
                            title="Best Flights" 
                            desc="Engrossed listening. Park gate sell they west hard for the."
                        />
                    </div>
                    <div className='flex justify-center w-full max-w-xs'
                         onMouseEnter={(e) => {
                             setHoveredCard(2);
                             updateRedBlockPosition(e, e.currentTarget);
                         }}
                         onMouseLeave={() => {
                             setHoveredCard(null);
                             resetRedBlock();
                         }}>
                        <Card 
                            img="/assets/Group 50.png" 
                            title="Local Events" 
                            desc="Barton vanity itself do in it. Preferd to men it engrossed listening."
                        />
                    </div>
                    <div className='flex justify-center w-full max-w-xs'
                         onMouseEnter={(e) => {
                             setHoveredCard(3);
                             updateRedBlockPosition(e, e.currentTarget);
                         }}
                         onMouseLeave={() => {
                             setHoveredCard(null);
                             resetRedBlock();
                         }}>
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