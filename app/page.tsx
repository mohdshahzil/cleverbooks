import HeroSection from "@/components/HeroSection";
import { NavbarDemo } from "@/components/Navbar";

import React from "react";

const page = () => {
  return (
    <div>
      <NavbarDemo></NavbarDemo>
      <div className="h-5"></div>
      <div className="h-5"></div>
      <div className="h-5"></div>
      <div className="h-5"></div>
      <HeroSection></HeroSection>

      <div className="">
        <div className="text-5xl">he</div>
        <div className="text-5xl">he</div>
        <div className="text-5xl">he</div>
        <div className="text-5xl">he</div>
        <div className="text-5xl">he</div>
        <div className="text-5xl">he</div>
        <div className="text-5xl">he</div>
      </div>
    </div>
  );
};

export default page;
