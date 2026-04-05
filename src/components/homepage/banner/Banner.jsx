import React from "react";
import bannerImg from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto px-4 mt-16 lg:mt-20">
      <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
        
        {/* Left Content */}
        <div className="left flex-1 space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFE8FF] text-[#7B39FF] rounded-full font-medium text-sm">
            <span className="flex items-center justify-center w-4 h-4 bg-[#DCD1FF] rounded-full">
              <span className="w-2 h-2 bg-[#7B39FF] rounded-full"></span>
            </span>
            New: AI-Powered Tools Available
          </div>

          {/* Title */}
          <h2 className="text-4xl lg:text-[56px] font-extrabold text-[#1B2135] xl:whitespace-nowrap leading-[1.1]">
            Supercharge Your <br className="hidden lg:block" /> Digital Workflow
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4 pt-2">
            <a className="w-full sm:w-auto px-8 py-3.5 bg-[#7B39FF] text-white font-semibold rounded-full hover:opacity-90 transition text-center cursor-pointer">
              Explore Products
            </a>
            <button className="w-full sm:w-auto px-8 py-3.5 border border-[#7B39FF] text-[#7B39FF] font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#F8F5FF] transition">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="right flex-1 w-full flex justify-end">
          <img className="w-full max-w-[600px] object-cover rounded-3xl" src={bannerImg} alt="Digital Workflow" />
        </div>

      </div>
    </div>
  );
};

export default Banner;
