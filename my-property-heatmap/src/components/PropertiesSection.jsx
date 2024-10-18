// PropertiesSection.jsx
import React from 'react';
import './PropertiesSection.css';

const PropertiesSection = ({
  selectedLocationProperties,
  selectedCityProperties,
  filterStatus,
  showFilter,
  handleStatusFilterChange,
  filteredProperties,
  clickedLocations,
  selectedCity,
  handleSeeDetails
}) => {
  return (
    <div className="properties-list" style={{ width: '30%', padding: '20px', overflowY: 'scroll' }}>
      <h3>
        {selectedLocationProperties.length > 0
          ? `Properties in ${clickedLocations[0]?.name}, ${selectedCity || 'Selected City'}`
          : 'Please Select a Location in a City to See Properties'}
      </h3>

      {/* Status Filter Dropdown - Initially Hidden */}
      {showFilter && (
        <div className="status-filter-container">
          <select
            id="status-filter"
            value={filterStatus}
            onChange={(e) => handleStatusFilterChange(e.target.value)}
          >
            <option value="">Filter by Status</option>
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>
        </div>
      )}

      <ul>
        {filteredProperties.map((property, index) => (
          <li key={index} className="property-item">
            <h4>{property.address}</h4>
            <p>Price: ₹{property.price}</p>
            <p>
              {property.bedrooms} Bedrooms | {property.bathrooms} Bathrooms | {property.area} Sq. Ft.
            </p>
            <p>Type: {property.type}</p>
            <div className="status-details">
              <p>Status: {property.status}</p>

              {/* "See Details" button */}
              <button
                className="details-button"
                onClick={() => handleSeeDetails(property)}
              >
                See Details
              </button>
            </div>

            {/* Displaying property image */}
            <img
              src={property.image}
              alt={property.address}
              style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertiesSection;
