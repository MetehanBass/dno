import React from "react";
import { motion } from "framer-motion";
import "./styles.scss";
const FilterButton = (props) => {
  const { type, displayName, setSelectedType, selectedType } = props;
  return (
    <div className="relative">
      <button
        onClick={() => setSelectedType(`${type}`)}
        className={`filter-button `}
      >
        {displayName}
      </button>
      {selectedType === type ? (
        <motion.div className="filter-button-underline" layoutId="underline" />
      ) : null}
    </div>
  );
};

export default FilterButton;
