import { NavbarDemo } from "@/components/Navbar";
import HumanSVG from "@/public/assets/SVG/HumanSVG";
import HumanSVGMobile from "@/public/assets/SVG/HumanSVGMobile";
import React from "react";

const page = () => {
  return (
    <div>
      <NavbarDemo></NavbarDemo>
      <div className="h-5"></div>
      <div className="h-5"></div>
      <div className="h-5"></div>
      <div className="h-5"></div>
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col gap-2  items-center justify-center  mt-0 md:mt-12 w-full md:w-1/2">
          <h1 className="text-5xl font-bold md:text-7xl mt-12 md:p-0 p-1">
            Every Order
          </h1>
          <h1 className="text-5xl font-bold md:text-7xl md:p-0  p-1">
            fulfilled, on Time
          </h1>
          <div className="text-sm md:text-2xl m-0 md:p-0 p-4 md:m-6 text-justify">
            Eliminate overstocking and under-stocking with Crest. Built by
            supply-chain experts, it brings the same technology used by large
            global brands to power fast-growing startups. In short, we make
            supply meet demand, and then help you grow both.
          </div>
        </div>
        <div className="hidden md:block absolute right-0   ">
          <HumanSVG></HumanSVG>
        </div>
        <div className="md:hidden block right-0 absolute top-60">
          <HumanSVGMobile></HumanSVGMobile>
        </div>
      </div>
    </div>
  );
};

export default page;
