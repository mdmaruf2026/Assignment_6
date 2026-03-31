import React from "react";

const StatsSection = () => {


    return (
        /* Purple background section with padding */
        <div className="bg-[#7C3AED] text-white py-12 px-5">

            {/* Container for centering items */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">

                {/* Active Users Stat */}
                <div className="text-center flex-1">

                    <h2 className="text-5xl font-extrabold mb-2">50K+</h2>

                    <p className="text-purple-100 text-sm font-medium">Active Users</p>

                </div>


                {/* Vertical Divider 1 (Hidden on mobile) */}
                <div className="hidden md:block h-16 w-[1px] bg-purple-400 opacity-50"></div>


                {/* Premium Tools Stat */}
                <div className="text-center flex-1">

                    <h2 className="text-5xl font-extrabold mb-2">200+</h2>

                    <p className="text-purple-100 text-sm font-medium">Premium Tools</p>

                </div>


                {/* Vertical Divider 2 (Hidden on mobile) */}
                <div className="hidden md:block h-16 w-[1px] bg-purple-400 opacity-50"></div>


                {/* Rating Stat */}
                <div className="text-center flex-1">

                    <h2 className="text-5xl font-extrabold mb-2">4.9</h2>

                    <p className="text-purple-100 text-sm font-medium">Rating</p>

                </div>

            </div>

        </div>
    );
};

export default StatsSection;