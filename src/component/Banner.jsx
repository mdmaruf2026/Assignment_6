import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="relative min-h-[600px] flex items-center overflow-hidden bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

        {/* Left Content */}
        <div className="space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F5F3FF] border border-[#DDD6FE] text-[#7C3AED] text-sm font-medium px-4 py-1.5 rounded-full">
            <i className="fa-solid fa-circle text-[10px] text-[#7C3AED]"></i>
            New: AI-Powered Tools Available
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Supercharge Your <br /> Digital Workflow
          </h1>

          {/* Paragraph */}
          <p className="text-[15px] leading-relaxed text-gray-500 max-w-lg">
            Access premium AI tools, design assets, templates, and productivity software—all in one place.
            Start creating faster today.
            <br />
            Explore Products
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">

            {/* Explore Products Button */}
            <button className="bg-[#7C3AED] hover:bg-[#6D28D9] transition-all px-8 py-3 rounded-full font-semibold text-[15px] flex items-center gap-3 text-white">
              Explore Products
            </button>

            {/*Demo Button */}
            <button className="border border-[#7C3AED] text-[#7C3AED] hover:bg-[#F5F3FF] transition-all px-8 py-3 rounded-full font-semibold text-[15px] flex items-center gap-2">
              <i className="fa-solid fa-play text-sm"></i>
              Watch Demo
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-120 w-auto object-contain drop-shadow-xl rounded-2xl"
              src={BannerImage}
              alt="Digital Workflow Banner"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;