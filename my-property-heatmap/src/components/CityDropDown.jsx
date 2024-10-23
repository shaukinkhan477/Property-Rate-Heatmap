import React from "react";

const CityDropdown = ({
  selectedCity,
  handleCityChange,
  cityCoordinates,
  name,
  cityName,
  id,
  value,
}) => {
  return (
    <div>
      {/* <label htmlFor="city-select">Choose a city: </label> */}
      <select id={id} value={value || ""} onChange={handleCityChange}>
        <option value="">{name}</option>
        {Object.keys(cityCoordinates).map((city) => (
          <option key={city} value={city} disabled={city === cityName}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityDropdown;
