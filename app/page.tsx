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
      <div className="flex flex-col md:flex-row">
        <div className="">
          <h1 className="text-7xl" >hey</h1>
        </div>
        <div className="hidden md:block absolute right-0   ">
          <HumanSVG></HumanSVG>
        </div>
        <div className="md:hidden block right-0 static ">
          <HumanSVGMobile></HumanSVGMobile>
        </div>
      </div>
    </div>
  );
};

export default page;
