import React from "react";

const LocalityDropdown = ({
  compareLocation1,
  CityData,
  compareCity1,
  onChange,
}) => {
  return (
    <div>
      {/* <label htmlFor="compare-location-1">
                Select location in {compareCity1}:{" "}
              </label> */}
      <select
        id="compare-location-1"
        value={compareLocation1 || ""}
        onChange={onChange}
      >
        <option value="">Select location</option>
        {CityData[compareCity1].map((location) => (
          <option key={location.name} value={location.name}>
            {location.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocalityDropdown;
