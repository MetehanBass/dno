import React from "react";

const FilterButton = (props) => {
  const { type, displayName, setSelectedType, selectedType } = props;
  return (
    <button
      onClick={() => setSelectedType(`${type}`)}
      className={`filter-button ${
        selectedType === `${type}` && "active-filter"
      }`}
    >
      {displayName}
    </button>
  );
};

export default FilterButton;
