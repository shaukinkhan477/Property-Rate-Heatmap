import React, { useState, useEffect } from "react";
import Map from "./components/Map";
import { Line } from "react-chartjs-2";
import "./ChartSetup"; // Import the Chart.js setup
import { CityData, cityCoordinates } from "./components/CityData";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// India's approximate center
const indiaCenter = [20.5937, 78.9629];

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [mapCenter, setMapCenter] = useState(indiaCenter);
  const [zoomLevel, setZoomLevel] = useState(5);

  // State for comparing cities and locations
  const [compareCity1, setCompareCity1] = useState(null);
  const [compareCity2, setCompareCity2] = useState(null);
  const [compareLocation1, setCompareLocation1] = useState(null);
  const [compareLocation2, setCompareLocation2] = useState(null);
  // toggling between city and comparision
  const [showComparison, setShowComparison] = useState(false);
  const [showLocaCamp, setShowLocaCamp] = useState(false);
  const [showFilterBy, setShowFilterBy] = useState(false);

  // Show or hide the price legend
  const [showLegend, setShowLegend] = useState(false);

  // Function to get the color by property price range
  const getColorByPrice = (price) => {
    if (price > 20000) return "red";
    if (price > 15000) return "orange";
    if (price > 10000) return "yellow";
    if (price > 7000) return "green";
    return "blue"; // Default color for lower prices
  };

  // State for filtering locations
  const [filter, setFilter] = useState(""); // To store the selected filter

  // State to control filter dropdown visibility and animation
  const [showFilter, setShowFilter] = useState(false);

  // State to handle graph visibility
  const [showCityGraph, setShowCityGraph] = useState(true);
  const [showLocationGraph, setShowLocationGraph] = useState(true);

  // Reset graphs visibility when cities or locations change
  useEffect(() => {
    if (compareCity1 && compareCity2) {
      setShowCityGraph(true);
    }
  }, [compareCity1, compareCity2]);

  useEffect(() => {
    if (compareLocation1 && compareLocation2) {
      setShowLocationGraph(true);
    }
  }, [compareLocation1, compareLocation2]);

  // Handle city change from the navigation dropdown
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setMapCenter(cityCoordinates[city]);
    setZoomLevel(12);
    setShowFilter(true); // Show filter dropdown when a city is selected
    setShowLegend(true); // Show the legend when a city is selected
  };

  // Reset locations when cities are changed
  const handleCompareCity1Change = (event) => {
    const city = event.target.value;
    setCompareCity1(city);
    setCompareLocation1(null); // Reset location 1 when compareCity1 changes
  };

  const handleCompareCity2Change = (event) => {
    const city = event.target.value;
    setCompareCity2(city);
    setCompareLocation2(null); // Reset location 2 when compareCity2 changes
  };

  // Handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Filter locations based on the selected filter
  const filteredLocations = CityData[selectedCity]?.filter((location) => {
    if (!filter) return true;
    if (filter === "mostPopulated") return location.population > 150000;
    if (filter === "mostFlooded") return location.flooded;
    if (filter === "mostRainy") return location.rainy;
    if (filter === "nearHospitals") return location.nearHospitals;
    if (filter === "nearSchools") return location.nearSchools;
    if (filter === "mostVisited") return location.mostVisited;
    return true;
  });

  // Function to generate price comparison data for graph
  const generateChartData = (city1, city2) => {
    if (!city1 || !city2) return null;

    const labels = ["Year 1", "Year 2", "Year 3", "Current"];

    const data = {
      labels: labels,
      datasets: [
        {
          label: city1.name,
          data: [
            city1.prices.year1,
            city1.prices.year2,
            city1.prices.year3,
            city1.prices.current,
          ],
          // rgba(75, 192, 192, 1)
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          // rgba(75, 192, 192, 0.2)
        },
        {
          label: city2.name,
          data: [
            city2.prices.year1,
            city2.prices.year2,
            city2.prices.year3,
            city2.prices.current,
          ],
          // borderColor: "rgba(153, 102, 255, 1)",
          borderColor: "rgba(153, 102, 255, 1)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          // rgba(153, 102, 255, 0.2)
        },
      ],
    };

    return data;
  };

  // Function to generate recommendation for cities
  const generateCityRecommendation = () => {
    if (!compareCity1 || !compareCity2) return null;

    const city1 = CityData[compareCity1][0];
    const city2 = CityData[compareCity2][0];

    if (!city1 || !city2) return "Please select valid cities.";

    const city1Growth = city1.prices.current - city1.prices.year1;
    const city2Growth = city2.prices.current - city2.prices.year1;

    if (city1Growth > city2Growth) {
      return `${compareCity1} is a better city to invest in with higher price growth.`;
    } else {
      return `${compareCity2} is a better city to invest in with higher price growth.`;
    }
  };

  // Function to generate recommendation for locations
  const generateLocationRecommendation = () => {
    if (!compareLocation1 || !compareLocation2) return null;

    const location1 = CityData[compareCity1]?.find(
      (loc) => loc.name === compareLocation1
    );
    const location2 = CityData[compareCity2]?.find(
      (loc) => loc.name === compareLocation2
    );

    if (!location1 || !location2) return "Please select valid locations.";

    const location1Growth = location1.prices.current - location1.prices.year1;
    const location2Growth = location2.prices.current - location2.prices.year1;

    if (location1Growth > location2Growth) {
      return `${compareLocation1} is a better location to invest in with higher price growth.`;
    } else {
      return `${compareLocation2} is a better location to invest in with higher price growth.`;
    }
  };

  const toggleLocalityComp = () => {
    setShowLocaCamp(!showLocaCamp);
  };

  const toggleCityComp = () => {
    setShowComparison(!showComparison);
  };

  const toggleCityPopUpCard = () => {
    setShowCityGraph(!showCityGraph);
  };

  const toggleLocalityPopUpCard = () => {
    setShowLocationGraph(!showLocationGraph);
  };

  return (
    <div>
      {/* Filter Dropdown - slides in from the left */}

      <div
        className="absolute top-20 left-0 z-[1001] p-1 -ml-4 shadow-sm bg-transparent rounded-lg"
        onMouseEnter={() => setShowFilterBy(true)}
      >
        {showFilter && (
          <button
            className="hover:bg-green-700 bg-green-900  text-white p-2 rounded-full   font-serif hover:opacity-90 "
            onClick={() => setShowFilterBy(!showFilterBy)}
          >
            <span className="ml-4">
              {showFilterBy ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
            </span>
            {/* <FilterAltIcon /> */}
          </button>
        )}
      </div>
      {showFilter && showFilterBy && (
        <div className={`filter-box ${showFilter ? "slide-in" : ""}`}>
          <div>
            <label htmlFor="filter-select">Filter by: </label>
            <select
              id="filter-select"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="">Filter Locations By </option>
              <option value="mostPopulated">Most Populated</option>
              <option value="mostFlooded">Most Flooded</option>
              <option value="mostRainy">Most Rainy</option>
              <option value="nearHospitals">Near Hospitals</option>
              <option value="nearSchools">Near Schools</option>
              <option value="mostVisited">Most Visited</option>
            </select>
          </div>
        </div>
      )}

      {/* Dropdowns Overlay "absolute flex w-[90%] top-2 left-[700px] z-10 gap-5 p-4 border-2  */}
      <div className=" dropdowns-overlay">
        {!showComparison && (
          <div>
            {/* <label htmlFor="city-select">Choose a city: </label> */}
            <select
              id="city-select"
              value={selectedCity || ""}
              onChange={handleCityChange}
            >
              <option value="">Select a city</option>
              {Object.keys(cityCoordinates).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        )}
        {/* Toggle btn ben comparsion ans selecting 
        <button onClick={toggleCityComp} className="toggle-btn">
          {showComparison ? "Select City" : "Compare Cities"}
        </button>
        */}
        <button
          onClick={toggleCityComp}
          className="bg-[#656665] py-2 px-3 rounded-xl shadow-sm hover:bg-green-900 hover:rounded-2xl hover:font-semibold text-white text-xs hover:text-sm"
        >
          {showComparison ? "Select City" : "Compare Cities"}
        </button>
        {/* Compare Cities and Locations */}
        {showComparison && (
          <>
            <div>
              {/* <label htmlFor="compare-city-1">
                Select first city to compare:{" "}
              </label> */}
              <select
                id="compare-city-1"
                value={compareCity1 || ""}
                onChange={handleCompareCity1Change}
              >
                <option value="">Select first city</option>
                {Object.keys(cityCoordinates).map((city) => (
                  <option
                    key={city}
                    value={city}
                    disabled={city === compareCity2}
                  >
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {/* <label htmlFor="compare-city-2">
                Select second city to compare:{" "}
              </label> */}
              <select
                id="compare-city-2"
                value={compareCity2 || ""}
                onChange={handleCompareCity2Change}
              >
                <option value="">Select second city</option>
                {Object.keys(cityCoordinates).map((city) => (
                  <option
                    key={city}
                    value={city}
                    disabled={city === compareCity1}
                  >
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        {/* Location Dropdowns */}
        {showComparison && showLocaCamp && compareCity1 && compareCity2 && (
          <>
            <div>
              {/* <label htmlFor="compare-location-1">
                Select location in {compareCity1}:{" "}
              </label> */}
              <select
                id="compare-location-1"
                value={compareLocation1 || ""}
                onChange={(e) => setCompareLocation1(e.target.value)}
              >
                <option value="">Select location</option>
                {CityData[compareCity1].map((location) => (
                  <option key={location.name} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              {/* <label htmlFor="compare-location-2">
                Select location in {compareCity2}:{" "}
              </label> */}
              <select
                id="compare-location-2"
                value={compareLocation2 || ""}
                onChange={(e) => setCompareLocation2(e.target.value)}
              >
                <option value="">Select location</option>
                {CityData[compareCity2].map((location) => (
                  <option key={location.name} value={location.name}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        {showComparison && compareCity1 && compareCity2 && (
          <button
            onClick={toggleLocalityComp}
            className="bg-[#656665] py-2 px-3 rounded-xl shadow-sm hover:bg-green-900 hover:rounded-2xl hover:font-semibold text-white text-xs hover:text-sm"
          >
            {showLocaCamp ? "Hide" : "Compare Locality"}
          </button>
        )}
      </div>

      {/* If both cities are selected, display the graphs */}
      {showComparison && compareCity1 && compareCity2 && (
        <div className="absolute bottom-0 -ml-1 -mb-1 left-0 w-20 lg:w-80 z-[1001] p-2 shadow-sm bg-transparent rounded-lg">
          <div className="flex justify-between gap-4 ">
            {compareCity1 && compareCity2 && showCityGraph && (
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
                  {compareCity1} vs{" "}
                  <span className="text-red-800">{compareCity2}</span>
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
            )}

            {showComparison &&
              compareLocation1 &&
              compareLocation2 &&
              showLocationGraph && (
                <div className="flex-1 bg-white p-2 rounded-lg shadow-sm opacity-95 ">
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
                      CityData[compareCity1].find(
                        (loc) => loc.name === compareLocation1
                      ),
                      CityData[compareCity2].find(
                        (loc) => loc.name === compareLocation2
                      )
                    )}
                  />
                  <h4 className="text-center font-semibold font-sans text-red-700 text-lg mt-2">
                    Location Recommendation
                  </h4>
                  <p className="text-center font-bold mb-2">
                    {generateLocationRecommendation()}
                  </p>
                </div>
              )}
          </div>
        </div>
      )}
      {showComparison && compareCity1 && compareCity2 && (
        <div className="absolute bottom-0 gap-20 z-[1001] p-2 shadow-sm bg-transparent rounded-lg">
          {!showCityGraph && (
            <button
              className="bg-green-900 text-white py-2 px-3 rounded-xl opacity-95 mb-2 ml-2 font-serif tracking-wider hover:bg-gray-500"
              onClick={toggleCityPopUpCard}
            >
              Cities Camp
            </button>
          )}
          {compareLocation1 && compareLocation2 && !showLocationGraph && (
            <button
              className="bg-green-900 text-white ml-60 lg:ml-[720px] py-2 px-3 rounded-xl opacity-95 mb-2  font-serif tracking-wider hover:bg-gray-500"
              onClick={toggleLocalityPopUpCard}
            >
              show Location
            </button>
          )}
        </div>
      )}

      {/* Render the map */}
      <Map
        cityData={selectedCity ? filteredLocations : []}
        mapCenter={mapCenter}
        zoomLevel={zoomLevel}
        cityCoordinates={cityCoordinates}
        onMarkerClick={(city) => {
          setSelectedCity(city);
          setMapCenter(cityCoordinates[city]);
          setZoomLevel(12); // Zoom in when marker is clicked
          setShowFilter(true); // Show filter dropdown
        }}
      />
      {/* Price Legend */}
      {showLegend && (
        <div className="absolute bottom-0 right-[245px] lg:right-[457px] bg-white p-2 shadow-sm z-[1000] w-62 font-serif rounded-tl-xl">
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
      )}
    </div>
  );
};

export default App;
