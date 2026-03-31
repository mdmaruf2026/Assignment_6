import React from "react";

const GetStarted = () => {


    return (
        /* White background section with padding */
        <div className="bg-white py-16 px-5">

            {/* Header Section */}
            <div className="text-center mb-12">

                <h2 className="text-4xl font-extrabold text-[#1E293B] mb-2">Get Started In 3 Steps</h2>

                <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>

            </div>


            {/* 3 Cards Container */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6">

                {/* Card 1: Create Account */}
                <div className="bg-white border border-gray-100 rounded-2xl p-8 flex-1 text-center shadow-sm hover:shadow-md transition-shadow relative">

                    {/* Number Badge */}
                    <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">01</span>

                    {/* Icon Circle */}
                    <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </div>

                    <h3 className="text-xl font-bold text-[#1E293B] mb-3">Create Account</h3>

                    <p className="text-gray-500 text-sm">Sign up for free in seconds. No credit card required to get started.</p>

                </div>


                {/* Card 2: Choose Products */}
                <div className="bg-white border border-gray-100 rounded-2xl p-8 flex-1 text-center shadow-sm hover:shadow-md transition-shadow relative">

                    {/* Number Badge */}
                    <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">02</span>

                    {/* Icon Circle */}
                    <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                        </svg>
                    </div>

                    <h3 className="text-xl font-bold text-[#1E293B] mb-3">Choose Products</h3>

                    <p className="text-gray-500 text-sm">Browse our catalog and select the tools that fit your needs.</p>

                </div>


                {/* Card 3: Start Creating */}
                <div className="bg-white border border-gray-100 rounded-2xl p-8 flex-1 text-center shadow-sm hover:shadow-md transition-shadow relative">

                    {/* Number Badge */}
                    <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">03</span>

                    {/* Icon Circle */}
                    <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>

                    <h3 className="text-xl font-bold text-[#1E293B] mb-3">Start Creating</h3>

                    <p className="text-gray-500 text-sm">Download and start using your premium tools immediately.</p>

                </div>

            </div>

        </div>
    );
};

export default GetStarted;