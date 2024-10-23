import React from "react";

const FilterBy = ({ filterCriteria, handleFilterChange }) => {
  return (
    <>
      <h3>Filter by:</h3>
      <div>
        <label>
          <input
            type="checkbox"
            value="mostPopulated"
            onChange={handleFilterChange}
          />
          Most Populated
        </label>
        <label>
          <input
            type="checkbox"
            value="mostFlooded"
            onChange={handleFilterChange}
          />
          Most Flooded
        </label>
        <label>
          <input
            type="checkbox"
            value="mostRainy"
            onChange={handleFilterChange}
          />
          Most Rainy
        </label>
        <label>
          <input
            type="checkbox"
            value="nearHospitals"
            onChange={handleFilterChange}
          />
          Near Hospitals
        </label>
        <label>
          <input
            type="checkbox"
            value="nearSchools"
            onChange={handleFilterChange}
          />
          Near Schools
        </label>
        <label>
          <input
            type="checkbox"
            value="mostVisited"
            onChange={handleFilterChange}
          />
          Most Visited
        </label>
      </div>
    </>
  );
};

export default FilterBy;
