import React from "react";

const LegendCard = () => {
  return (
    <div className="absolute bottom-0 right-[245px] lg:right-[457px] bg-white p-2 shadow-sm z-[1000] w-62 txt-btn rounded-tl-xl bg-opacity-60">
      <h4 className="font-semibold text-center mb-1">
        Current Price (/Sq. Ft.)
      </h4>
      <ul>
        <li>
          <span className="legend-color blue"></span>{" "}
          <span className="font-light">Below ₹ 7,000</span>
        </li>
        <li>
          <span className="legend-color green"></span>{" "}
          <span className="font-light">₹ 7,000 - ₹ 10,000</span>
        </li>
        <li>
          <span className="legend-color yellow"></span>{" "}
          <span className="font-light">₹ 10,000 - ₹ 15,000</span>
        </li>
        <li>
          <span className="legend-color orange"></span>{" "}
          <span className="font-light">₹ 15,000 - ₹ 20,000</span>
        </li>
        <li>
          <span className="legend-color red"></span>{" "}
          <span className="font-light">₹ 20,000 & Above</span>
        </li>
      </ul>
    </div>
  );
};

export default LegendCard;
