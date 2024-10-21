// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { CityData } from './CityData'; // Assuming properties are part of CityData

// const PropertyDetails = () => {
//   const { id } = useParams();
  
//   // Find the property in CityData using the id
//   let property = null;
//   Object.keys(CityData).forEach((city) => {
//     CityData[city].forEach((location) => {
//       const foundProperty = location.properties?.find((prop) => prop.id === id);
//       if (foundProperty) {
//         property = foundProperty;
//       }
//     });
//   });

//   if (!property) return <h3>Property not found</h3>;

//   return (
//     <div className="property-details">
//       <h2>{property.address}</h2>
//       <p>Price: ₹{property.price}</p>
//       <p>{property.bedrooms} Bedrooms | {property.bathrooms} Bathrooms | {property.area} Sq. Ft.</p>
//       <p>Type: {property.type}</p>
//       <p>Status: {property.status}</p>
//       <img
//         src={property.image}
//         alt={property.address}
//         style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '10px' }}
//       />
//       {/* Add more details if needed */}
//     </div>
//   );
// };

// export default PropertyDetails;



import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically

  const property = location.state?.property; // Get the property from the state passed via navigation

  // Debugging: Check if property is received
  console.log("Property Details received in PropertyDetails Component:", property);

  if (!property) {
    return <div>Loading...</div>; // Show a loading state or error if property data is not passed correctly
  }

  const handleBackToProperties = () => {
    navigate(-1); // Navigate back to the previous route without refreshing
  };

  return (
    <div>
      <h2>Property Details (ID: {id})</h2>
      <h3>{property.address}</h3>
      <p>Price: ₹{property.price}</p>
      <p>
        {property.bedrooms} Bedrooms | {property.bathrooms} Bathrooms | {property.area} Sq. Ft.
      </p>
      <p>Type: {property.type}</p>
      <p>Status: {property.status}</p>
      <img
        src={property.image}
        alt={property.address}
        style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
      />

      {/* Back to All Properties button */}
      <button onClick={handleBackToProperties} style={{ marginTop: '20px' }}>
        Back to All Properties
      </button>
    </div>
  );
};

export default PropertyDetails;

