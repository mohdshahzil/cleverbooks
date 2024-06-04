import HeroSection from "@/components/HeroSection";
import { NavbarDemo } from "@/components/Navbar";
import QuestionAnswered from "@/components/QuestionAnswered";

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
      <div className="h-48" ></div>
      <div className="bg-white"></div>
      <QuestionAnswered></QuestionAnswered>
    </div>
  );
};

export default page;
