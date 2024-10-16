import React, { useState, useEffect } from "react"; 
import Map from "./components/Map";
import { Line } from "react-chartjs-2";
import "./ChartSetup"; // Import the Chart.js setup
import { CityData, cityCoordinates } from "./components/CityData";


// India's approximate center
const indiaCenter = [20.5937, 78.9629];

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [mapCenter, setMapCenter] = useState(indiaCenter);
  const [zoomLevel, setZoomLevel] = useState(5);
  const [filterCriteria, setFilterCriteria] = useState([]); // Store multiple filter criteria

  // State for comparing cities and locations
  const [compareCity1, setCompareCity1] = useState(null);
  const [compareCity2, setCompareCity2] = useState(null);
  const [compareLocation1, setCompareLocation1] = useState(null);
  const [compareLocation2, setCompareLocation2] = useState(null);

    // Show or hide the price legend
  const [showLegend, setShowLegend] = useState(false);

    // Function to get the color by property price range
  const getColorByPrice = (price) => {
    if (price > 20000) return 'red';
    if (price > 15000) return 'orange';
    if (price > 10000) return 'yellow';
    if (price > 7000) return 'green';
    return 'blue'; // Default color for lower prices
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
    setZoomLevel(11);
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
    const { value, checked } = event.target;
    setFilterCriteria((prevFilters) =>
      checked ? [...prevFilters, value] : prevFilters.filter((filter) => filter !== value)
    );
  };

  // Filter locations based on the selected filter
  const filteredLocations = CityData[selectedCity]?.filter((location) => {
    if (filterCriteria.length === 0) return true;
    return filterCriteria.every((filter) => {
      switch (filter) {
        case "mostPopulated":
          return location.population > 150000;
        case "mostFlooded":
          return location.flooded;
        case "mostRainy":
          return location.rainy;
        case "nearHospitals":
          return location.nearHospitals;
        case "nearSchools":
          return location.nearSchools;
        case "mostVisited":
          return location.mostVisited;
        default:
          return true;
      }
    });
  });

  // Function to generate price comparison data for graph
  const generateChartData = (city1, city2) => {
    if (!city1 || !city2) return null;

    const labels = ['Year 1', 'Year 2', 'Year 3', 'Current'];

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
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
        {
          label: city2.name,
          data: [
            city2.prices.year1,
            city2.prices.year2,
            city2.prices.year3,
            city2.prices.current,
          ],
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
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

    const location1 = CityData[compareCity1]?.find(loc => loc.name === compareLocation1);
    const location2 = CityData[compareCity2]?.find(loc => loc.name === compareLocation2);

    if (!location1 || !location2) return "Please select valid locations.";

    const location1Growth = location1.prices.current - location1.prices.year1;
    const location2Growth = location2.prices.current - location2.prices.year1;

    if (location1Growth > location2Growth) {
      return `${compareLocation1} is a better location to invest in with higher price growth.`;
    } else {
      return `${compareLocation2} is a better location to invest in with higher price growth.`;
    }
  };

  return (
    <div>
      {/* Filter Dropdown - slides in from the left */}
{showFilter && (
        <div className={`filter-box ${showFilter ? "slide-in" : ""}`}>
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
        </div>
      )}


      {/* Dropdowns Overlay */}
      <div className="dropdowns-overlay">
        <div>
          <label htmlFor="city-select">Choose a city: </label>
          <select id="city-select" value={selectedCity || ''} onChange={handleCityChange}>
            <option value="">Select a city</option>
            {Object.keys(cityCoordinates).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Compare Cities and Locations */}
        <div>
          <label htmlFor="compare-city-1">Select first city to compare: </label>
          <select id="compare-city-1" value={compareCity1 || ''} onChange={handleCompareCity1Change}>
            <option value="">Select first city</option>
            {Object.keys(cityCoordinates).map((city) => (
              <option key={city} value={city} disabled={city === compareCity2}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="compare-city-2">Select second city to compare: </label>
          <select id="compare-city-2" value={compareCity2 || ''} onChange={handleCompareCity2Change}>
            <option value="">Select second city</option>
            {Object.keys(cityCoordinates).map((city) => (
              <option key={city} value={city} disabled={city === compareCity1}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Location Dropdowns */}
        {compareCity1 && compareCity2 && (
          <>
            <div>
              <label htmlFor="compare-location-1">Select location in {compareCity1}: </label>
              <select
                id="compare-location-1"
                value={compareLocation1 || ''}
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
              <label htmlFor="compare-location-2">Select location in {compareCity2}: </label>
              <select
                id="compare-location-2"
                value={compareLocation2 || ''}
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
      </div>

      {/* If both cities are selected, display the graphs */}
      {compareCity1 && compareCity2 && (
        <div className="graph-overlay">
          <div className="comparison-graphs">
            {compareCity1 && compareCity2 && showCityGraph && (
              <div className="graph-container">
                <button className="close-btn" onClick={() => setShowCityGraph(false)}>
                  ✖
                </button>
                <h3>City Price Comparison</h3>
                <h4>{compareCity1} vs {compareCity2}</h4>
                <Line data={generateChartData(CityData[compareCity1][0], CityData[compareCity2][0])} />
                <h4>City Recommendation</h4>
                <p>{generateCityRecommendation()}</p>
              </div>
            )}

            {compareLocation1 && compareLocation2 && showLocationGraph && (
              <div className="graph-container">
                <button className="close-btn" onClick={() => setShowLocationGraph(false)}>
                  ✖
                </button>
                <h3>Location Price Comparison</h3>
                <h4>{compareLocation1} vs {compareLocation2}</h4>
                <Line
                  data={generateChartData(
                    CityData[compareCity1].find((loc) => loc.name === compareLocation1),
                    CityData[compareCity2].find((loc) => loc.name === compareLocation2)
                  )}
                />
                <h4>Location Recommendation</h4>
                <p>{generateLocationRecommendation()}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Render the map */}
      <Map
        cityData={selectedCity ? filteredLocations : []}
        mapCenter={mapCenter}
        zoomLevel={zoomLevel}
        cityCoordinates={cityCoordinates}
        selectedCity={selectedCity} // Pass selectedCity to the Map component
        onMarkerClick={(city) => {
          setSelectedCity(city);
          setMapCenter(cityCoordinates[city]);
          setZoomLevel(11); // Zoom in when marker is clicked
          setShowFilter(true); // Show filter dropdown
        }}
      />
            {/* Price Legend */}
      {showLegend && (
        <div className="price-legend">
          <h4>Current Price (per Sq. Ft.)</h4>
          <ul>
            <li><span className="legend-color blue"></span> Below ₹ 7,000</li>
            <li><span className="legend-color green"></span> ₹ 7,000 - ₹ 10,000</li>
            <li><span className="legend-color yellow"></span> ₹ 10,000 - ₹ 15,000</li>
            <li><span className="legend-color orange"></span> ₹ 15,000 - ₹ 20,000</li>
            <li><span className="legend-color red"></span> ₹ 20,000 & Above</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
