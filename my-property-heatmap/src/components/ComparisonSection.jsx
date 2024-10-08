// import React from "react";
// import { Line } from "react-chartjs-2";
// import { CityData } from "./CityData"; // Import the CityData

// const ComparisonSection = ({
//   selectedCity,
//   compareCity1,
//   compareCity2,
//   compareLocation1,
//   compareLocation2,
//   setCompareCity1,
//   setCompareCity2,
//   setCompareLocation1,
//   setCompareLocation2,
//   generateChartData,
//   generateCityRecommendation,
//   generateLocationRecommendation,
// }) => {
//   return (
//     <div className="comparison-section">
//       <div className="dropdowns-overlay">
//         <div>
//           <label htmlFor="compare-city-1">Select first city to compare: </label>
//           <select
//             id="compare-city-1"
//             value={compareCity1 || ""}
//             onChange={(e) => setCompareCity1(e.target.value)}
//           >
//             <option value="">Select first city</option>
//             {Object.keys(CityData).map((city) => (
//               <option key={city} value={city} disabled={city === compareCity2}>
//                 {city}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label htmlFor="compare-city-2">Select second city to compare: </label>
//           <select
//             id="compare-city-2"
//             value={compareCity2 || ""}
//             onChange={(e) => setCompareCity2(e.target.value)}
//           >
//             <option value="">Select second city</option>
//             {Object.keys(CityData).map((city) => (
//               <option key={city} value={city} disabled={city === compareCity1}>
//                 {city}
//               </option>
//             ))}
//           </select>
//         </div>

//         {compareCity1 && compareCity2 && (
//           <>
//             <div>
//               <label htmlFor="compare-location-1">
//                 Select location in {compareCity1}:{" "}
//               </label>
//               <select
//                 id="compare-location-1"
//                 value={compareLocation1 || ""}
//                 onChange={(e) => setCompareLocation1(e.target.value)}
//               >
//                 <option value="">Select location</option>
//                 {CityData[compareCity1].map((location) => (
//                   <option key={location.name} value={location.name}>
//                     {location.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label htmlFor="compare-location-2">
//                 Select location in {compareCity2}:{" "}
//               </label>
//               <select
//                 id="compare-location-2"
//                 value={compareLocation2 || ""}
//                 onChange={(e) => setCompareLocation2(e.target.value)}
//               >
//                 <option value="">Select location</option>
//                 {CityData[compareCity2].map((location) => (
//                   <option key={location.name} value={location.name}>
//                     {location.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </>
//         )}
//       </div>

//       {/* If both cities selected, show the chart and recommendation */}
//       {compareCity1 && compareCity2 && (
//         <div className="comparison-graphs">
//           <div className="graph-container">
//             <h3>City Price Comparison</h3>
//             <h4>
//               {compareCity1} vs {compareCity2}
//             </h4>
//             <Line
//               data={generateChartData(
//                 CityData[compareCity1][0],
//                 CityData[compareCity2][0]
//               )}
//             />
//             <h4>City Recommendation</h4>
//             <p>{generateCityRecommendation()}</p>
//           </div>

//           {/* If two locations are selected, show the location comparison */}
//           {compareLocation1 && compareLocation2 && (
//             <div className="graph-container">
//               <h3>Location Price Comparison</h3>
//               <h4>
//                 {compareLocation1} vs {compareLocation2}
//               </h4>
//               <Line
//                 data={generateChartData(
//                   CityData[compareCity1].find(
//                     (loc) => loc.name === compareLocation1
//                   ),
//                   CityData[compareCity2].find(
//                     (loc) => loc.name === compareLocation2
//                   )
//                 )}
//               />
//               <h4>Location Recommendation</h4>
//               <p>{generateLocationRecommendation()}</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ComparisonSection;
