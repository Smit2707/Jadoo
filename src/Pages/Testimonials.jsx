import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const testimonials = [
    {
        id: 1,
        image: "/assets/MaskGroup.png",
        quote: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
        name: "Mike taylor",
        location: "Lahore, Pakistan",
        role: "CEO of Red Button"
    },
    {
        id: 2,
        image: "/assets/MaskGroup2.png",
        quote: "Great experience with the team. The travel arrangements were perfect and the service was excellent.",
        name: "Chris Thomas",
        location: "CEO of Red Button",
        role: "New York, USA"
    },
    {
        id: 3,
        image: "/assets/MaskGroup3.png",
        quote: "Wonderful destinations and very professional service. Would definitely recommend to others.",
        name: "Sarah Johnson",
        location: "London, UK",
        role: "Travel Enthusiast"
    }
];

const TestimonialCard = ({ testimonial, isActive }) => (
    <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300 transform 
        ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-40'}`}>
        <div className="flex flex-col items-center sm:items-start sm:flex-row gap-6">
            <div className="shrink-0">
                <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                />
            </div>
            <div className="flex flex-col space-y-4 text-center sm:text-left">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    "{testimonial.quote}"
                </p>
                <div>
                    <h4 className="text-lg font-semibold text-[#14183E]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
            </div>
        </div>
    </div>
);

const Page5 = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => 
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const previousTestimonial = () => {
        setCurrentTestimonial((prev) => 
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <div className="min-h-[fit-content] bg-gray-50 py-12 sm:py-16 lg:py-20 lg:flex lg:items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-6 text-center lg:text-left">
                        <span className="text-sm sm:text-base text-gray-500 uppercase tracking-wider">
                            TESTIMONIALS
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14183E] leading-tight">
                            What People Say<br />About Us.
                        </h2>
                        <div className="flex justify-center lg:justify-start gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 
                                        ${currentTestimonial === index ? 'bg-[#14183E]' : 'bg-gray-300'}`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -right-4 -top-12 flex gap-4 z-20">
                            <button
                                onClick={previousTestimonial}
                                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <IoIosArrowUp className="text-xl sm:text-2xl text-gray-600" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                                aria-label="Next testimonial"
                            >
                                <IoIosArrowDown className="text-xl sm:text-2xl text-gray-600" />
                            </button>
                        </div>
                        <div className="relative h-[300px] sm:h-[250px]">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={testimonial.id}
                                    className={`absolute top-0 left-0 w-full transition-all duration-500
                                        ${index === currentTestimonial ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                    style={{
                                        transform: `translateX(${(index - currentTestimonial) * 100}%)`,
                                        display: Math.abs(index - currentTestimonial) <= 1 ? 'block' : 'none'
                                    }}
                                >
                                    <TestimonialCard 
                                        testimonial={testimonial} 
                                        isActive={index === currentTestimonial}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page5; 