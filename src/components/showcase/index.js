import React, { useState } from "react";
import watch from "assets/showcase-watch.jpg";
import { data } from "./dummyData.js";

const Showcase = () => {
  const [selectedType, setSelectedType] = useState("all");
  return (
    <div className="showcase-container bg-white">
      <div className="showcase-wrapper py-12">
        <div className="showcase-categories flex w-full justify-center uppercase gap-4 text-xs text-black">
          <div className="">
            <button
              onClick={() => setSelectedType("all")}
              className="bg-[#EFEFEF] uppercase rounded-sm p-2"
            >
              Tümü
            </button>
          </div>
          <div className="">
            <button
              onClick={() => setSelectedType("necklace")}
              className="uppercase p-2"
            >
              Kolyeler
            </button>
          </div>
          <div className="">
            <button
              onClick={() => setSelectedType("bracelet")}
              className="uppercase p-2"
            >
              Bileklikler
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 w-full pt-12 px-6 gap-6 max-w-[1140px] mx-auto">
          {data &&
            data.map(
              ({ img, name, type, price }, i) =>
                type === selectedType && (
                  <div key={i} className="image-wrapper ">
                    <img src={watch} alt={name} />
                  </div>
                )
            )}
        </div>
        <div className="pt-16 flex flex-col gap-12 justify-center items-center">
          <div className="w-12 border-b-2 border-black border-solid" />
          <div>
            <button className="p-4 bg-black/90 text-white">
              Daha Fazla Gör
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
