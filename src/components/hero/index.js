import React from "react";
import HeroCard from "./hero-card";

const Hero = () => {
  return (
    <div className="hero-container flex justify-center items-center mt-44">
      <div className="hero-wrapper ">
        <HeroCard />
      </div>
    </div>
  );
};

export default Hero;
