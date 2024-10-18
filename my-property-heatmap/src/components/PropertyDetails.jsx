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
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();

  // Fetch the property details based on the ID
  // You might want to load the specific property data from state, API, etc.

  return (
    <div>
      <h2>Property Details (ID: {id})</h2>
      {/* Display more detailed information about the property */}
    </div>
  );
};

export default PropertyDetails;
