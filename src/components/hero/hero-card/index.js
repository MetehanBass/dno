import React from "react";

const HeroCard = () => {
  return (
    <div className="heroCard-container bg-[#EFEFEF]/70 rounded-sm">
      <div className="flex flex-col md:gap-6 gap-2 text-black text-center md:py-16 py-4 md:px-32 px-12">
        <div>
          <h2 className="font-extrabold md:text-4xl text-3xl">WE ARE DNOCAT</h2>
        </div>
        <div>
          <h3 className="font-semibold md:text-lg text-sm">
            Work hard. Dream big.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
