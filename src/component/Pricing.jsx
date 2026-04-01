import React from "react";

const Pricing = () => {


    return (
        /* White background section with padding */
        <div className="bg-white py-16 px-5">

            {/* Header Section */}
            <div className="text-center mb-12">

                <h2 className="text-4xl font-extrabold text-[#1E293B] mb-2">Simple, Transparent Pricing</h2>

                <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            </div>


            {/* 3 Pricing Cards Container */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-8">

                {/* Card 1: Starter Plan */}
                <div className="bg-white border border-gray-100 rounded-2xl p-8 flex-1 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">

                    <div>
                        <h3 className="text-xl font-bold text-[#1E293B] mb-1">Starter</h3>

                        <p className="text-gray-400 text-sm mb-6">Perfect for getting started</p>


                        <div className="text-4xl font-extrabold text-[#1E293B] mb-6">$0<span className="text-sm font-medium text-gray-400">/Month</span></div>


                        {/* Feature List */}
                        <div className="space-y-3 mb-8">

                            <p className="text-gray-600 text-sm flex items-center gap-2">✓ Access to 10 free tools</p>

                            <p className="text-gray-600 text-sm flex items-center gap-2">✓ Basic templates</p>

                            <p className="text-gray-600 text-sm flex items-center gap-2">✓ Community support</p>

                            <p className="text-gray-600 text-sm flex items-center gap-2">✓ 1 project per month</p>

                        </div>
                    </div>


                    {/* Button */}
                    <button className="w-full bg-[#7C3AED] text-white py-3 rounded-xl font-semibold hover:bg-[#6D28D9] transition-colors">
                        Get Started Free
                    </button>

                </div>


                {/* Card 2: Pro Plan */}
                <div className="bg-[#7C3AED] text-white rounded-2xl p-8 flex-1 flex flex-col justify-between shadow-lg relative transform md:scale-105">

                    {/* Most Popular Badge */}
                    <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FEF08A] text-[#1E293B] text-xs font-bold py-1 px-4 rounded-full">
                        Most Popular
                    </span>


                    <div>
                        <h3 className="text-xl font-bold mb-1">Pro</h3>

                        <p className="text-purple-200 text-sm mb-6">Best for professionals</p>


                        <div className="text-4xl font-extrabold mb-6">$29<span className="text-sm font-medium text-purple-200">/Month</span></div>


                        {/* Feature List */}
                        <div className="space-y-3 mb-8">

                            <p className="text-white text-sm flex items-center gap-2">✓ Access to all premium tools</p>

                            <p className="text-white text-sm flex items-center gap-2">✓ Unlimited templates</p>

                            <p className="text-white text-sm flex items-center gap-2">✓ Priority support</p>

                            <p className="text-white text-sm flex items-center gap-2">✓ Unlimited projects</p>

                            <p className="text-white text-sm flex items-center gap-2">✓ Cloud sync</p>

                            <p className="text-white text-sm flex items-center gap-2">✓ Advanced analytics</p>

                        </div>
                    </div>


                    {/* Button */}
                    <button className="w-full bg-white text-[#7C3AED] py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
                        Start Pro Trial
                    </button>

                </div>


                {/* Card 3: Enterprise Plan */}
                <div className="bg-white border border-gray-100 rounded-2xl p-8 flex-1 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">

                    <div>
                        <h3 className="text-xl font-bold text-[#1E293B] mb-1">Enterprise</h3>

                        <p className="text-gray-400 text-sm mb-6">For teams and businesses</p>


                        <div className="text-4xl font-extrabold text-[#1E293B] mb-6">$99<span className="text-sm font-medium text-gray-400">/Month</span></div>


                        {/* Feature List */}
                        <div className="space-y-3 mb-8">

                            <p className="text-gray-600 text-sm flex items-center gap-2">✓ Everything in Pro</p>

                            <p className="text-gray-600 text-sm flex items-center gap-2">✓ Team collaboration</p>

                            <p className="text-gray-600 text-sm flex items-center gap-2">✓ Custom integrations</p>

                            <p className="text-gray-600 text-sm flex items-center gap-2">✓ Dedicated support</p>

                            <p className="text-gray-600 text-sm flex items-center gap-2">✓ SLA guarantee</p>

                            <p className="text-gray-600 text-sm flex items-center gap-2">✓ Custom branding</p>

                        </div>
                    </div>


                    {/* Button */}
                    <button className="w-full bg-[#7C3AED] text-white py-3 rounded-xl font-semibold hover:bg-[#6D28D9] transition-colors">
                        Contact Sales
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Pricing;