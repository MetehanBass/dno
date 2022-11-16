import React, { useState, useEffect } from "react";
import watch from "assets/showcase-watch.jpg";
import { data, filter } from "./dummyData.js";
import "./styles.scss";
import FilterButton from "./components/filter-buttons.js";
import { motion } from "framer-motion";

const Showcase = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (selectedType === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((e) => e.type === selectedType));
    }
  }, [selectedType]);

  return (
    <div className="showcase-container bg-white">
      <div className="showcase-wrapper py-12">
        <div className="showcase-categories flex w-full justify-center uppercase gap-4 text-xs text-black">
          {filter.map(({ type, displayName }, i) => (
            <FilterButton
              key={i}
              type={type}
              displayName={displayName}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
            />
          ))}
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 w-full pt-12 px-6 gap-6 max-w-[1140px] mx-auto">
          {filteredData.map(({ img, name, type, price }, i) => (
            <motion.div
              initial={{ opacity: 0.6 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              whileInView={{ opacity: 1 }}
              key={i}
              className="image-wrapper "
            >
              <div className="relative">
                <img src={watch} alt={name} />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs">{name}</p>
                  {price} ₺
                </div>
              </div>
            </motion.div>
          ))}
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
