import React from "react";
import { Line } from "react-chartjs-2";

const InfoCard = ({
  toggleCityPopUpCard,
  compareCity1,
  compareCity2,
  generateChartData,
  CityData,
  generateCityRecommendation,
}) => {
  return (
    <div className="flex-1 bg-white p-2 rounded-lg shadow-sm opacity-95">
      <button
        className="hover:bg-green-900  text-white p-1 px-2 rounded-full opacity-80 font-serif hover:opacity-90 bg-gray-500 ml-72"
        onClick={toggleCityPopUpCard}
      >
        ✖
      </button>
      <h3 className="text-center items-center font-bold font-serif tracking-wider text-lg mb-2">
        City Price Comparison
      </h3>
      <h4 className="text-center font-bold font-mono text-green-900 tracking-wider text-xl mb-2">
        {compareCity1} vs <span className="text-red-800">{compareCity2}</span>
      </h4>
      <Line
        data={generateChartData(
          CityData[compareCity1][0],
          CityData[compareCity2][0]
        )}
      />
      <h4 className="text-center font-semibold font-sans text-red-700 text-lg mt-2">
        City Recommendation
      </h4>
      <p className="text-center font-bold mb-2">
        {generateCityRecommendation()}
      </p>
    </div>
  );
};

export default InfoCard;
