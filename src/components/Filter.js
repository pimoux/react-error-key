import React from "react";

const Filter = ({ filter, onRemoveFilter }) => {
  return (
    <div className="filter">
        <label htmlFor={filter.label}>{filter.label}</label>
        <input type={filter.type} id={filter.label} />
        <button onClick={() => onRemoveFilter(filter)}>Remove</button>
    </div>
  );
};

export default Filter;
