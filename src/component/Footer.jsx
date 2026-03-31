const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-400 font-sans text-[14px]">
      
      {/* Top Accent Line */}
      <div className="h-1 bg-[#7C3AED]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-3xl font-extrabold text-white">
              DigiTools
            </h2>
            <p className="leading-relaxed text-gray-400 max-w-sm">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-[15px]">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-[15px]">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-5 text-[15px]">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
          
            <h3 className="text-white font-semibold mb-5 text-[15px]">Social Links</h3>
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="#" className="w-10 h-10 bg-white hover:bg-gray-200 transition-colors rounded-full flex items-center justify-center text-[#1E293B] text-xl cursor-pointer">
                <i className="fa-brands fa-instagram text-base"></i>
              </a>
              {/* Facebook */}
              <a href="#" className="w-10 h-10 bg-white hover:bg-gray-200 transition-colors rounded-full flex items-center justify-center text-[#1E293B] text-xl cursor-pointer">
                <i className="fa-brands fa-facebook-f text-base"></i>
              </a>
              {/* X (Twitter) */}
              <a href="#" className="w-10 h-10 bg-white hover:bg-gray-200 transition-colors rounded-full flex items-center justify-center text-[#1E293B] text-xl cursor-pointer">
                <i className="fa-brands fa-x-twitter text-base"></i>
              </a>

            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500">
          <div>© {new Date().getFullYear()} Digitools. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
