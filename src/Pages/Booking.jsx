import React from 'react'

const EasyStep = ({ icon, title, description }) => (
    <div className="flex gap-4 items-start">
        <div className={`p-4 rounded-2xl ${icon.bgColor}`}>
            {icon.component}
        </div>
        <div className="space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-[#14183E]">{title}</h3>
            <p className="text-sm md:text-sm text-gray-500 max-w-[350px]">{description}</p>
        </div>
    </div>
);

const TripCard = () => (
    <div className="bg-white rounded-3xl p-4 border-[1px] shadow-xl border-grey-200 max-w-[400px]">
        <img 
            src="./src/assets/image12.png" 
            alt="Trip to Greece" 
            className="w-full h-[200px] object-cover rounded-2xl"
        />
        <div className="space-y-4 mt-4">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Trip To Greece</h3>
                <span className="text-gray-500">Ongoing</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-gray-500">14-29 June</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-500">by Robbin j</span>
                <img src="./src/assets/MaskGroup.png" alt="Robbin" className="w-8 h-8 rounded-full ml-auto"/>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full">🌿</span>
                    <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full">🗺️</span>
                    <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full">✈️</span>
                </div>
                <div className="flex items-center gap-2 ml-auto">
                    <span className="text-gray-500">24 people going</span>
                    <button className="text-pink-500">❤️</button>
                </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full w-[40%]"></div>
            </div>
            <p className="text-sm text-gray-500">Trip to rome 40% completed</p>
        </div>
    </div>
);

const Page4 = () => {
    return (
        <div className="container flex justify-around mx-auto px-4 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Section */}
                <div className="space-y-12 ">
                    <div className="space-y-4">
                        <span className="text-gray-500 md:text-start md:inline inline-block w-full text-start">Easy and Fast</span>
                        <h2 className="text-4xl md:text-4xl font-bold text-[#14183E] leading-tight md:text-start text-start">
                            Book Your Next Trip In 3 Easy Steps
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <EasyStep 
                            icon={{
                                component: <span className="text-2xl">📍</span>,
                                bgColor: "bg-yellow-100"
                            }}
                            title="Choose Destination"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
                        />
                        <EasyStep 
                            icon={{
                                component: <span className="text-2xl">💳</span>,
                                bgColor: "bg-red-100"
                            }}
                            title="Make Payment"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
                        />
                        <EasyStep 
                            icon={{
                                component: <span className="text-2xl">🚗</span>,
                                bgColor: "bg-blue-100"
                            }}
                            title="Reach Airport on Selected Date"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex justify-center lg:justify-center ">
                    <TripCard />
                </div>
            </div>
        </div>
    )
}

export default Page4 