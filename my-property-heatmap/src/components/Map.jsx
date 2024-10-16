import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  useMap,
  Tooltip,
  ZoomControl,
  LayersControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PriceComparisonChart from "./PriceComparisonChart"; // Import the chart component
import "mapbox-gl-leaflet";

const mapboxToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

// Custom icon for the markers
const icon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Component to handle zooming and centering to a selected city or country
const SetMapView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center && zoom) {
      map.setView(center, zoom); // Set the map center and zoom level dynamically
    }
  }, [center, zoom, map]);
  return null;
};

// Function to return a color based on the property price range
const getColorByPrice = (price) => {
  if (price > 20000) return "red";
  if (price > 15000) return "orange";
  if (price > 10000) return "yellow";
  if (price > 7000) return "green";
  return "blue"; // Default color for lower prices
};

const Map = ({
  cityData,
  mapCenter,
  zoomLevel,
  cityCoordinates,
  onMarkerClick,
}) => {
  const [clickedLocations, setClickedLocations] = useState([]); // Track two clicked locations
  const [showLegend, setShowLegend] = useState(false); // Show or hide the price legend
  const [selectedCityProperties, setSelectedCityProperties] = useState([]); // To store properties for a selected city or location
  const [selectedLocationProperties, setSelectedLocationProperties] = useState(
    []
  ); // To store properties for a selected location

  // Function to handle polygon click
  const handlePolygonClick = (location) => {
    setClickedLocations((prev) => {
      if (prev.length === 2) return [location]; // Reset if two locations are already clicked
      if (prev.some((loc) => loc.name === location.name)) return prev; // Prevent duplicates
      return [...prev, location];
    });
    setShowLegend(true); // Show the legend when a location is clicked
    setSelectedLocationProperties(location.properties || []); // Set properties for the selected location
  };

  // Function to handle marker click
  const handleMarkerClick = (city) => {
    onMarkerClick(city); // Original marker click functionality
    setShowLegend(true); // Ensure the legend appears when a marker is clicked
    const cityLocations = cityData.find((c) => c.city === city);
    if (cityLocations) {
      setSelectedCityProperties(
        cityLocations.locations.flatMap((loc) => loc.properties || [])
      );
      setSelectedLocationProperties([]); // Reset location properties
    }
  };

  // Function to generate price comparison data for graph
  const generateChartData = () => {
    if (clickedLocations.length < 2) return null;

    const labels = ["3 Year Ago", "2 Year Ago", "1 Year Ago", "Current"];

    const data = {
      labels: labels,
      datasets: [
        {
          label: clickedLocations[0].name,
          data: [
            clickedLocations[0].prices.year1,
            clickedLocations[0].prices.year2,
            clickedLocations[0].prices.year3,
            clickedLocations[0].prices.current,
          ],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
        {
          label: clickedLocations[1].name,
          data: [
            clickedLocations[1].prices.year1,
            clickedLocations[1].prices.year2,
            clickedLocations[1].prices.year3,
            clickedLocations[1].prices.current,
          ],
          borderColor: "rgba(153, 102, 255, 1)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
        },
      ],
    };

    return data;
  };

  // Function to generate recommendation
  const generateRecommendation = () => {
    if (clickedLocations.length < 2) return null;

    const location1Growth =
      clickedLocations[0].prices.current - clickedLocations[0].prices.year1;
    const location2Growth =
      clickedLocations[1].prices.current - clickedLocations[1].prices.year1;

    if (location1Growth > location2Growth) {
      return `${clickedLocations[0].name} is a better investment option with higher price growth.`;
    } else {
      return `${clickedLocations[1].name} is a better investment option with higher price growth.`;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Map Section */}
      <MapContainer
        center={mapCenter}
        zoom={zoomLevel}
        style={{ height: "700px", width: "70%" }}
        zoomControl={false}
      >
        <ZoomControl position="topright" />
        <SetMapView center={mapCenter} zoom={zoomLevel} />

        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Standard View">
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=${mapboxToken}`}
              attribution="Imagery © Mapbox"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Satellite View">
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?access_token=${mapboxToken}`}
              attribution="Imagery © Mapbox"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Hybrid Map View">
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}?access_token=${mapboxToken}`}
              attribution="Imagery © Mapbox"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        {Object.keys(cityCoordinates).map((city, index) => (
          <Marker
            key={index}
            position={cityCoordinates[city]}
            icon={icon}
            eventHandlers={{ click: () => handleMarkerClick(city) }}
          >
            <Tooltip
              direction="top"
              offset={[0, -10]}
              opacity={1}
              permanent={false}
              className="rounded-lg py-1 px-2"
            >
              <span>{city}</span>
            </Tooltip>
          </Marker>
        ))}

        {cityData.map((location, index) => (
          <Polygon
            key={index}
            positions={location.coords}
            color={getColorByPrice(location.prices.current)}
            fillColor={getColorByPrice(location.prices.current)}
            fillOpacity={0.5}
            weight={2}
            eventHandlers={{ click: () => handlePolygonClick(location) }}
          >
            <Tooltip
              direction="top"
              offset={[0, -10]}
              opacity={1}
              permanent={false}
              className="rounded-xl"
            >
              <span className="text-center font-bold mb-2">
                {location.name}
              </span>
            </Tooltip>
            <Popup>
              <strong className="text-center font-bold mb-2">
                {location.name}
              </strong>
              <div className="price-row">
                <span className=" text-black text-center mb-1 font-mono font-bold">
                  3 Years Ago:
                </span>
                <span className="text-green-900 font-semibold ml-4 tracking-wider">
                  ₹{location.prices.year1} /Sq.ft
                </span>
              </div>
              <div className="price-row">
                <span className="text-black text-center mb-1 font-mono font-bold">
                  2 Years Ago:
                </span>
                <span className="text-green-900 font-semibold ml-4 tracking-wider">
                  ₹{location.prices.year2} /Sq.ft
                </span>
              </div>
              <div className="price-row">
                <span className="text-black text-center mb-1 font-mono font-bold">
                  1 Year Ago:
                </span>
                <span className="text-green-900 font-semibold ml-4 tracking-wider">
                  ₹{location.prices.year3} /Sq.ft
                </span>
              </div>
              <div className="price-row">
                <span className="text-black text-center mb-1 font-mono font-bold ">
                  Current Price:
                </span>
                <span className="text-green-900 font-semibold ml-4 tracking-wider">
                  ₹{location.prices.current} /Sq.ft
                </span>
              </div>
            </Popup>
          </Polygon>
        ))}

        {clickedLocations.length === 2 && (
          <Popup
            position={clickedLocations[1].coords[0]}
            className="flex-1 w-[356px] bg-white p-2 rounded-lg opacity-95"
          >
            <div>
              <h3 className="text-center text-green-800 items-center font-bold font-serif tracking-wider text-lg mb-2">
                Price Comparison
              </h3>
              <PriceComparisonChart chartData={generateChartData()} />
              <h4 className="text-center font-semibold font-sans text-red-700 text-lg mt-2">
                Recommendation
              </h4>
              <p className="text-center font-bold mb-2">
                {generateRecommendation()}
              </p>
            </div>
          </Popup>
        )}
      </MapContainer>

      {/* Properties List Section */}
      <div
        className="properties-list"
        style={{ width: "30%", padding: "20px", overflowY: "scroll" }}
      >
        <h3>
          {selectedLocationProperties.length > 0
            ? "Properties in Selected Location"
            : "Properties in Selected City"}
        </h3>
        <ul>
          {(selectedLocationProperties.length > 0
            ? selectedLocationProperties
            : selectedCityProperties
          ).map((property, index) => (
            <li key={index} className="property-item">
              <h4>{property.address}</h4>
              <p>Price: ₹{property.price}</p>
              <p>
                {property.bedrooms} Bedrooms | {property.bathrooms} Bathrooms |{" "}
                {property.area} Sq. Ft.
              </p>
              <p>Type: {property.type}</p>
              <p>Status: {property.status}</p>
              {/* Displaying property image */}
              <img
                src={property.image}
                alt={property.address}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
            </li>
          ))}
        </ul>
      </div>

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

export default Map;

//url={`https://api.mapbox.com/styles/v1/shaukinkhan477/cm1ekwijr02j001pj02ecgs56.html?title=view&access_token=pk.eyJ1Ijoic2hhdWtpbmtoYW40NzciLCJhIjoiY20xYWFjOGRiMWh6czJrcXg4NXhrNTEyaSJ9.OoSU40rlpti0a2prBps_1Q&zoomwheel=true&fresh=true#1.85/28.87/15.34/0/75`}
