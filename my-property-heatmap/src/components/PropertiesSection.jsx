// PropertiesSection.jsx
import React from "react";
// import "./PropertiesSection.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import NightShelterIcon from "@mui/icons-material/NightShelter";
import BathroomIcon from "@mui/icons-material/Bathroom";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { Button } from "@mui/material";

const PropertiesSection = ({
  selectedLocationProperties,
  selectedCityProperties,
  filterStatus,
  showFilter,
  handleStatusFilterChange,
  filteredProperties,
  clickedLocations,
  selectedCity,
  filterType,
  handleTypeChangeFilter,
  showType,
  handleSeeDetails,
}) => {
  return (
    <div
      className="properties-list rounded-xl shadow-sm"
      style={{ width: "30%", padding: "20px", overflowY: "scroll" }}
    >
      <h3 className=" mb-8 py-2 text-sm lg:text-lg bg-[#228b22]  text-white tracking-wider items-center rounded-lg  mt-5 text-center ">
        {selectedLocationProperties.length > 0
          ? `Properties in ${clickedLocations[0]?.name}, ${
              selectedCity || "Selected City"
            }`
          : "Please Select a Location in a City to See Properties"}
      </h3>

      {/* Status Filter Dropdown - Initially Hidden */}
      {/* //className="status-filter-container" */}
      <div className="flex flex-wrap justify-end">
        {showFilter && ( // Conditional rendering for the dropdown
          <div className="status-filter-container  mb-2 items-center">
            <select
              id="status-filter"
              value={filterStatus}
              onChange={(e) => handleStatusFilterChange(e.target.value)} // Handle dropdown change
            >
              <option value="">Filter by status</option>{" "}
              {/* Option for showing all properties */}
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </div>
        )}
        {showType && ( // Conditional rendering for the dropdown
          <div className="status-filter-container  mb-2 items-center">
            <select
              id="status-filter"
              value={filterType}
              onChange={(e) => handleTypeChangeFilter(e.target.value)} // Handle dropdown change
            >
              <option value="">Filter by Type</option>{" "}
              {/* Option for showing all properties */}
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="House">House</option>
            </select>
          </div>
        )}
      </div>

      <ul className="flex flex-col items-center">
        {filteredProperties.map((property, index) => (
          <li key={index} className="property-item">
            <div className="bg-[#f9f9f9] rounded-lg p-2 mb-3 mt-2">
              <img
                src={property.image}
                alt={property.address}
                style={{
                  // width: "100%",
                  height: "170px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
                className="rounded-lg w-80"
              />

              <h4 className="font-semibold bg-white text-center tracking-wider txt-btn  ml-2 mr-2 py-1  px-4 rounded-lg ">
                {property.address}
              </h4>

              <div className="flex justify-between items-center mt-3 ">
                <p>
                  <CurrencyRupeeIcon size="small" color="success" />
                  <span className="font-semibold txt-btn text-[#666]">
                    ₹ {property.price}
                  </span>
                </p>
                <p className="font-semibold txt-btn">
                  <LoyaltyIcon size="small" color="success" />
                  <span className="font-semibold txt-btn text-[#666]">
                    {property.area} Sq. Ft.
                  </span>
                </p>
              </div>
              <div className="flex justify-between items-center ">
                <p>
                  <NightShelterIcon size="small" color="success" />
                  <span className="font-semibold txt-btn text-[#666]">
                    {" "}
                    {property.bedrooms} Bedroom
                  </span>
                </p>
                <p>
                  <BathroomIcon size="small" color="success" />
                  <span className="font-semibold txt-btn text-[#666]">
                    {" "}
                    {property.bathrooms} Bathroom
                  </span>
                </p>
              </div>
              <div className="flex justify-between items-center ">
                <p>
                  <ApartmentIcon size="small" color="success" />
                  <span className="font-semibold txt-btn text-[#666]">
                    {" "}
                    {property.type}
                  </span>
                </p>
                <p>
                  <BusinessIcon size="small" color="success" />
                  <span className="font-semibold txt-btn text-[#666]">
                    {" "}
                    {property.status}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-center mt-2 p-1">
                <Button
                  variant="outlined"
                  color="success"
                  onClick={handleSeeDetails}
                >
                  Details
                </Button>
              </div>
            </div>

            {/* Displaying property image */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertiesSection;
