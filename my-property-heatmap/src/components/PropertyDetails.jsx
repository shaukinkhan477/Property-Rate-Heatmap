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

import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { Link } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import NightShelterIcon from "@mui/icons-material/NightShelter";
import BathroomIcon from "@mui/icons-material/Bathroom";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessIcon from "@mui/icons-material/Business";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import ConstructionIcon from "@mui/icons-material/Construction";

const PropertyDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically

  const property = location.state?.property; // Get the property from the state passed via navigation

  // Debugging: Check if property is received
  console.log(
    "Property Details received in PropertyDetails Component:",
    property
  );

  if (!property) {
    return <div>Loading...</div>; // Show a loading state or error if property data is not passed correctly
  }

  const handleBackToProperties = () => {
    navigate(-1); // Navigate back to the previous route without refreshing
  };

  return (
    <div>
      <Header />
      <div className="mt-20 lg:mt-32 mx-5 lg:mx-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-4 mt-6">
          <img
            src={property.image}
            alt={property.address}
            // style={{ width: "100%", height: "auto", marginBottom: "10px" }}
            className="w-full h-96 object-cover rounded-lg cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col  w-[65%] rounded-md lg:flex-row justify-evenly items-center ml-9 mr-9 mt-7 mb-5 ">
        <div className="txt-btn flex flex-col gap-3 mb-2">
          <h2 className="text-xl">
            Price:
            <CurrencyRupeeIcon size="small" color="success" />{" "}
            <span className="text-green-700">{property.price}</span>
          </h2>
          <p className="text-lg ml-4"># {property.address}</p>
          <div className="txt-btn bg-[#f9f9f9] text-center p-1 rounded-xl text-lg cursor-pointer text-[#ff3520] hover:text-black">
            <Link to="https://affordable-cal.vercel.app/">
              <p>Estimate Calculator</p>
            </Link>
          </div>
        </div>
        <div className="flex  gap-4  justify-between items-center mb-2">
          <div className="flex flex-col justify-between items-center">
            <p className="txt-btn text-lg">{property.bedrooms}</p>
            <p className="tracking-wider font-serif font-thin">Bed</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <p className="txt-btn text-lg">{property.bathrooms}</p>
            <p className="tracking-wider font-serif font-thin">Bath</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <p className="txt-btn text-lg tracking-widest">{property.area}</p>
            <p className="tracking-wider font-serif font-thin">sqft</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 shadow-sm  right-1 lg:right-24  items-center  mt-8  py-3 border border-[#2d486f] txt-btn mb-5 px-11 rounded-lg  bg-[#f0f8ff] fixed">
          <button className="bg-green-900 text-white rounded-lg p-3 hover:bg-green-800 hover:text-black">
            Request a tour
          </button>
          <button className="border-2 border-green-900 text-green-600 rounded-lg p-3 hover:border-blue-900 hover:text-black ">
            Contact agent
          </button>
        </div>
      </div>

      <div className="flex flex-col  w-[65%] bg-[#f9f9f9] gap-3 mx-9 my-7  rounded-md  text-white">
        <div className="flex justify-evenly items-center gap-5 mb-5 py-4 ">
          <p className="bg-gray-400 w-52 text-center py-2 px-4 txt-btn rounded-lg">
            <ApartmentIcon size="small" color="success" /> {property.type}
          </p>
          <p className="bg-gray-400 w-52 text-center py-2 px-4 txt-btn rounded-lg">
            <LoyaltyIcon size="small" color="success" /> {property.area} Sqft
          </p>
        </div>
        <div className="flex justify-evenly items-center mb-5 mx-2 gap-7">
          <p className="bg-gray-400 w-52 text-center py-2 px-4 txt-btn rounded-lg">
            <BusinessIcon size="small" color="success" /> {property.status}
          </p>
          <p className="bg-gray-400 w-52 text-center py-2 px-4 txt-btn rounded-lg">
            <BusinessIcon size="small" color="success" /> {property.school}
          </p>
          <p className="bg-gray-400 w-52 text-center py-2 px-4 txt-btn rounded-lg">
            <ConstructionIcon size="small" color="success" />
            Built in 2023
          </p>
        </div>
      </div>
      <div className="w-[65%] mx-9 my-7">
        <h2 className="txt-btn text-xl py-4 mx-5 font-bold">What's special</h2>
        <div className="flex gap-7 mx-7">
          <p className="txt-btn bg-[#f0f8ff] py-2 px-4 rounded-xl font-semibold text-green-900">
            Swimming pool
          </p>
          <p className="txt-btn bg-[#f0f8ff] font-semibold py-2 px-4 rounded-xl text-green-900">
            Generous half-acre lot
          </p>
        </div>
        <div>
          <p className="py-6 px-3 txt-btn text-gray-500">
            **Charming 4-Bedroom Home in Conroe, TX – Priced to Sell!** Gated
            estate just 13 minutes from The Woodlands Mall, this spacious
            4-bedroom, 4.5-bathroom home offers the perfect blend of convenience
            and privacy. Sitting on a generous half-acre lot, the property
            features a swimming pool, perfect for Texas summers. The home is in
            need of some TLC and can benefit from light cosmetic updates, making
            it an ideal opportunity for buyers looking to add their personal
            touch. Priced below market value, this home is a fantastic
            investment in a prime location. Don't miss out on this rare find!
          </p>
        </div>
      </div>
      <div className="w-[65%] mx-9 my-7">
        <h2 className="txt-btn text-xl py-4 mx-5 font-bold">
          Facts & features
        </h2>
        <p className="txt-btn mx-7  bg-[#f0f8ff] py-2 px-4 rounded-xl font-semibold text-green-900">
          Swimming pool
        </p>
        <div>
          <div>
            <p className="txt-btn mx-9 my-6">Bedrooms & bathrooms</p>
            <ul className="txt-btn mx-11 text-gray-500">
              <li>Bedrooms: {property.bedrooms} </li>
              <li>Bathrooms: {property.bathrooms} </li>
              <li>Puja Room: 1 </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
