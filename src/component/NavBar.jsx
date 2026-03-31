import React from "react";

const NavBar = ({carts = []}) => {
  return (
    <div className="navbar bg-white py-4 px-4 md:px-10 border-b border-gray-100">
      
      {/* Brand Logo */}
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-extrabold text-3xl text-[#7C3AED] cursor-pointer">
          DigiTools
        </div>
      </div>

      {/* Navigation Links */}
      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal gap-6 px-1 text-[15px] font-medium text-gray-600">
          <li className="hover:text-gray-900 transition-colors">
            <a href="#">Products</a>
          </li>
          <li className="hover:text-gray-900 transition-colors">
            <a href="#">Features</a>
          </li>
          <li className="hover:text-gray-900 transition-colors">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-gray-900 transition-colors">
            <a href="#">Testimonials</a>
          </li>
          <li className="hover:text-gray-900 transition-colors">
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="navbar-end flex items-center gap-6">
        
        <button className="relative text-gray-700 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>

          {carts.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {carts.length}
            </span>
          )}
        </button>

        {/* Login */}
        <button className="text-[15px] font-medium text-gray-700 hover:text-gray-900">
          Login
        </button>

        {/* Action Button */}
        <button className=" btn bg-[#7C3AED] hover:bg-[#6D28D9] border-none text-white px-6 rounded-full font-medium normal-case">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavBar;