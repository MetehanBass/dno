import React, { useState, useEffect } from "react";
import watch from "assets/showcase-watch.jpg";
import { data, filter } from "./dummyData.js";
import "./styles.scss";
import FilterButton from "./components/filter-buttons.js";
import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./components/product-card.js";

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
    <div className="showcase-container  bg-white">
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
        <motion.div
          layout
          className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full pt-12 px-6 gap-6 mt-6 max-w-[1140px] mx-auto"
        >
          <AnimatePresence>
            {filteredData.map(({ img, name, type, price, id }) => (
              <React.Fragment key={id}>
                <ProductCard name={name} img={img} price={price} />
              </React.Fragment>
            ))}
          </AnimatePresence>
        </motion.div>
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
