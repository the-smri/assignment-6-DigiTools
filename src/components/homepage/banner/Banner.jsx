import React from "react";
import bannerImg from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="flex flex-col lg:flex-row justify-between gap-2 items-center">
        <div className="left space-y-3">
        <h2 className="text-4xl lg:text-7xl font-extrabold">
          Supercharge Your <br></br> Digital Workflow
        </h2>
        <p className="text-gray-400 text-base">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. <br />Explore
          Products
        </p>
        <div className=" flex justify-start items-center gap-2">
          <a className="btn border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white transition-transform  hover:scale-105 active:scale-95 rounded-2xl">
            Explore Products
          </a>
          <button className="btn btn-outline btn-primary rounded-2xl">
            Watch Demo
          </button>
        </div>
      </div>
      <div className="right">
        <img src={bannerImg} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Banner;
