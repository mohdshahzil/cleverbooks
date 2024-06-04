import HumanSVG from "@/public/assets/SVG/HumanSVG";
import HumanSVGMobile from "@/public/assets/SVG/HumanSVGMobile";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <div className="flex flex-col gap-2   mt-0 md:mt-12 w-full md:w-1/2">
        <h1 className="text-5xl  font-bold md:text-7xl mt-12 md:p-0 px-2">
          Every Order
        </h1>
        <h1 className="text-5xl font-bold md:text-7xl md:p-0  px-2">
          fulfilled, on Time
        </h1>
        <div className="text-base  md:text-xl text-gray-200 m-0 md:p-0 px-2 py-4 md:my-6 text-justify">
          Eliminate overstocking and under-stocking with Crest. Built by
          supply-chain experts, it brings the same technology used by large
          global brands to power fast-growing startups. In short, we make supply
          meet demand, and then help you grow both.
        </div>
      </div>
      <div className="hidden md:block static right-0   ">
        <HumanSVG></HumanSVG>
      </div>
      <div className="md:hidden block right-0 static ">
        <HumanSVGMobile></HumanSVGMobile>
      </div>
    </div>
  );
};

export default HeroSection;
