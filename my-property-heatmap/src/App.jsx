import React, { useState, useEffect } from "react";
import Map from "./components/Map";
import { Line } from "react-chartjs-2";
import "./ChartSetup"; // Import the Chart.js setup
import { CityData, cityCoordinates } from "./components/CityData";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LegendCard from "./components/LegendCard";
import FilterBy from "./components/FilterBy";
import CityDropdown from "./components/CityDropdown";
import LocalityDropdown from "./components/LocalityDropdown";
import InfoCard from "./components/InfoCard";
import LocalityCompareInfo from "./components/LocalityCompareInfo";
import Button from "./components/Button";

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
    setZoomLevel(11);
    setShowFilter(true); // Show filter dropdown when a city is selected
    setShowLegend(true); // Show the legend when a city is selected
  };

  // Reset locations when cities are changed
  const handleCompareCity1Change = (event) => {
    const city = event.target.value;
    setCompareCity1(city);
    setCompareLocation1(null); // Reset location 1 when compareCity1 changes
    setMapCenter(cityCoordinates[city]);
    setZoomLevel(11);
  };

  const handleCompareCity2Change = (event) => {
    const city = event.target.value;
    setCompareCity2(city);
    setCompareLocation2(null); // Reset location 2 when compareCity2 changes
    setMapCenter(cityCoordinates[city]);
    setZoomLevel(14);
  };

  const handleCompareLoc1Change = (e) => {
    setCompareLocation1(e.target.value);
  };

  const handleCompareLoc2Change = (e) => {
    setCompareLocation2(e.target.value);
  };

  // Handle filter change
  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setFilterCriteria((prevFilters) =>
      checked
        ? [...prevFilters, value]
        : prevFilters.filter((filter) => filter !== value)
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
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
        {
          label: city2.name,
          data: [
            city2.prices.year1,
            city2.prices.year2,
            city2.prices.year3,
            city2.prices.current,
          ],
          borderColor: "rgba(153, 102, 255, 1)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
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

  const toggleFilterShow = () => {
    setShowFilterBy(!showFilterBy);
  };

  return (
    <div>
      <div
        className="absolute top-20 left-0 z-[1001] p-1 -ml-4 shadow-sm bg-transparent rounded-lg"
        onMouseEnter={() => setShowFilterBy(true)}
      >
        {showFilter && (
          <span className="ml-4">
            {" "}
            <Button
              onClick={toggleFilterShow}
              name={
                showFilterBy ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />
              }
            />
          </span>
        )}
      </div>
      {/* Filter Dropdown - slides in from the left */}
      {showFilter && showFilterBy && (
        <div
          className={`filter-box ${showFilter ? "slide-in" : ""} bg-opacity-60`}
        >
          <FilterBy
            filterCriteria={filterCriteria}
            handleFilterChange={handleFilterChange}
          />
        </div>
      )}

      {/* Dropdowns Overlay */}
      <div className="dropdowns-overlay">
        {!showComparison && (
          <CityDropdown
            name="Select a city"
            id="city-select"
            value={selectedCity}
            // selectedCity={selectedCity}
            handleCityChange={handleCityChange}
            cityCoordinates={cityCoordinates}
          />
        )}

        <Button
          onClick={toggleCityComp}
          name={showComparison ? "Select City" : "Compare Cities"}
        />

        {/* Compare Cities and Locations */}
        {showComparison && (
          <>
            {/* Dropdown for 1st city */}
            <CityDropdown
              name="Select first city"
              id="compare-city-1"
              value={compareCity1}
              handleCityChange={handleCompareCity1Change}
              cityCoordinates={cityCoordinates}
              cityName={compareCity2}
            />

            {/* Dropdown for 2nd city */}
            <CityDropdown
              name="Select second city"
              id="compare-city-2"
              value={compareCity2}
              handleCityChange={handleCompareCity2Change}
              cityCoordinates={cityCoordinates}
              cityName={compareCity1}
            />
          </>
        )}

        {/* Location Dropdowns */}
        {showComparison && showLocaCamp && compareCity1 && compareCity2 && (
          <>
            {/* Dropdown for 1st Location */}
            <LocalityDropdown
              compareLocation1={compareLocation1}
              CityData={CityData}
              compareCity1={compareCity1}
              onChange={handleCompareLoc1Change}
            />

            {/* Dropdown for 2nd Location */}
            <LocalityDropdown
              compareLocation1={compareLocation2}
              CityData={CityData}
              compareCity1={compareCity2}
              onChange={handleCompareLoc2Change}
            />
          </>
        )}
        {showComparison && compareCity1 && compareCity2 && (
          <Button
            onClick={toggleLocalityComp}
            name={showLocaCamp ? "Hide" : "Compare Locality"}
          />
        )}
      </div>

      {/* If both cities are selected, display the graphs */}
      {showComparison && compareCity1 && compareCity2 && (
        <div className="absolute bottom-0 -ml-1 -mb-1 left-0 w-20 lg:w-80 z-[1001] p-2 shadow-sm bg-transparent rounded-lg">
          <div className="flex justify-between gap-4 ">
            {compareCity1 && compareCity2 && showCityGraph && (
              <InfoCard
                toggleCityPopUpCard={toggleCityPopUpCard}
                compareCity1={compareCity1}
                compareCity2={compareCity2}
                generateChartData={generateChartData}
                CityData={CityData}
                generateCityRecommendation={generateCityRecommendation}
              />
            )}

            {showComparison &&
              compareLocation1 &&
              compareLocation2 &&
              showLocationGraph && (
                <LocalityCompareInfo
                  toggleLocalityPopUpCard={toggleLocalityPopUpCard}
                  compareLocation1={compareLocation1}
                  compareLocation2={compareLocation2}
                  generateChartData={generateChartData}
                  CityData={CityData}
                  compareCity1={compareCity1}
                  compareCity2={compareCity2}
                  generateLocationRecommendation={
                    generateLocationRecommendation
                  }
                />
              )}
          </div>
        </div>
      )}

      {showComparison && compareCity1 && compareCity2 && (
        <div className="absolute bottom-0 gap-20 z-[1001] p-2 shadow-sm bg-transparent rounded-lg">
          {!showCityGraph && (
            <Button onClick={toggleCityPopUpCard} name="Cities Camp" />
          )}
          {compareLocation1 && compareLocation2 && !showLocationGraph && (
            <span className="ml-60 lg:ml-[720px]">
              <Button onClick={toggleLocalityPopUpCard} name="show Location" />
            </span>
          )}
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
      {showLegend && <LegendCard />}
    </div>
  );
};

export default App;
