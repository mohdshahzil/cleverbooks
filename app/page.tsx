import { NavbarDemo } from "@/components/Navbar";
import HumanSVG from "@/public/assets/SVG/HumanSVG";
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
        <div className="  ">
          <h1></h1>
        </div>
        <div className="hidden md:block  absolute right-0 ">
          <HumanSVG></HumanSVG>
        </div>
      </div>
    </div>
  );
};

export default page;
