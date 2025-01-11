import React from 'react';

const Sub = () => {
    return (
        <div className="w-full py-16 px-4 sm:px-6 relative lg:px-8 overflow-hidden rounded-3xl bg-[#f7f5fe]">
            <img className="absolute hidden md:block bottom-0 left-[0%] z-[0] opacity-[0.1]" src="./public/assets/curve.png" alt="" />
            <img className="absolute hidden md:block right-[0%] top-0 z-[1]" src="./public/assets/cr2.png" alt="" />
            <div className="max-w-4xl mx-auto relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12 relative">
                    <div className="absolute -top-6 right-8 w-12 h-12 bg-[#654fe5] rounded-full flex items-center justify-center transform rotate-45">
                        <svg
                            className="w-6 h-6 text-white transform -rotate-[45deg]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </div>
                    <div className="text-center space-y-6">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#5e6282] leading-tight max-w-2xl mx-auto">
                            Subscribe to get information, latest news and other interesting offers about Jadoo
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
                            <div className="relative w-full sm:w-2/3">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                />
                            </div>
                            <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sub;