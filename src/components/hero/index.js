import React from "react";
import HeroCard from "./hero-card";

const Hero = () => {
  return (
    <div className="hero-container flex justify-center items-center custom-hero-background  max-h-screen min-h-[850px]">
      <div className="hero-wrapper ">
        <HeroCard />
      </div>
    </div>
  );
};

export default Hero;
