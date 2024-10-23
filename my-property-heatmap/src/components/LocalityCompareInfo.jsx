import React from "react";
import { Line } from "react-chartjs-2";

const LocalityCompareInfo = ({
  toggleLocalityPopUpCard,
  compareLocation1,
  compareLocation2,
  generateChartData,
  CityData,
  compareCity1,
  compareCity2,
  generateLocationRecommendation,
}) => {
  return (
    <div className="flex-1 bg-white p-2 rounded-lg shadow-sm opacity-95">
      <button
        className="hover:bg-green-900  text-white p-1 px-2 rounded-full opacity-80 font-serif hover:opacity-90 bg-gray-500 ml-72"
        onClick={toggleLocalityPopUpCard}
      >
        ✖
      </button>
      <h3 className="text-center items-center font-bold font-serif tracking-wider text-lg mb-2">
        Location Price Comparison
      </h3>
      <h4 className="text-center font-bold font-mono text-green-900 tracking-wider text-xl mb-2">
        {compareLocation1} vs{" "}
        <span className="text-red-800">{compareLocation2}</span>
      </h4>
      <Line
        data={generateChartData(
          CityData[compareCity1].find((loc) => loc.name === compareLocation1),
          CityData[compareCity2].find((loc) => loc.name === compareLocation2)
        )}
      />
      <h4 className="text-center font-semibold font-sans text-red-700 text-lg mt-2">
        Location Recommendation
      </h4>
      <p className="text-center font-bold mb-2">
        {generateLocationRecommendation()}
      </p>
    </div>
  );
};

export default LocalityCompareInfo;
