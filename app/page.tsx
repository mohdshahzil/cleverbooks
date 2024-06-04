 
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
      <h1>This is the test</h1>
     <HumanSVG></HumanSVG>
    </div>
  );
};

export default page;
