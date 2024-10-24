import React, { useState } from "react";
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
import ContactFormModal from "./ContactFormModal";
import TourRequest from "./TourRequest";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StorefrontIcon from "@mui/icons-material/Storefront";

const PropertyDetails = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showTourRequest, setShowTourRequest] = useState(false);

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

  const closeContactForm = () => setShowContactForm(false);
  const onContactFormSubmit = () => {
    setFormSubmitted(true);
    setShowContactForm(false);
  };

  const toggleTourRequest = () => {
    setShowTourRequest(true); // Open the "Request a Tour" popup
  };

  const closeTourForm = () => setShowTourRequest(false);

  const onCalculateClick = () => {
    setShowContactForm(true);
  };

  return (
    <div>
      <Header />
      <div className="mt-20 lg:mt-32 mx-5 lg:mx-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-4  ">
          <img
            src={property.image}
            alt={property.address}
            // style={{ width: "100%", height: "auto", marginBottom: "10px" }}
            className="w-full mt-5 lg:mt-0 ml-6 md:ml-0 h-96 object-cover rounded-lg cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col w-full sm:w-[65%] bg-[#f9f9f9]  rounded-md lg:flex-row justify-evenly items-center ml-9 mr-9 mt-7 mb-5 ">
        <div className="txt-btn flex flex-col gap-3 mb-2  py-3">
          <h2 className="text-xl ">
            Price:
            <CurrencyRupeeIcon size="small" color="success" />{" "}
            <span className="text-green-700">{property.price}</span>
          </h2>
          <p className="text-lg ml-4 mt-2"># {property.address}</p>
          <div className="txt-btn bg-[#f9f9f9] text-center mt-2 p-1 rounded-xl text-lg cursor-pointer text-[#ff3520] hover:text-black">
            <Link to="https://affordable-cal.vercel.app/">
              <p>Estimate Calculator</p>
            </Link>
          </div>
        </div>
        <div className="flex  gap-4  justify-between items-center mb-6 mr-9 ml-9">
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
        <div className="flex  gap-4  justify-between items-center  mb-2 mr-9 ml-9">
          <div className="flex flex-col justify-between items-center">
            <p className="txt-btn text-lg">
              <ApartmentIcon size="small" color="success" />
            </p>
            <p className="tracking-wider font-serif font-thin">
              {property.type}
            </p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <p className="txt-btn text-lg">
              <BusinessIcon size="small" color="success" />{" "}
            </p>
            <p className="tracking-wider font-serif font-thin">
              {property.status}
            </p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <p className="txt-btn text-lg tracking-widest">
              <ConstructionIcon size="small" color="success" />
            </p>
            <p className="tracking-wider font-serif font-thin">Built in 2023</p>
          </div>
        </div>

        <div className="flex lg:w-96  flex-col gap-6 sm:shadow-sm bg-opacity-50 sm:opacity-100 right-1 lg:right-20 py-3 border md:border-[#2d486f] txt-btn top-[74%] px-11 justify-center items-center rounded-lg lg:h-44 mb-12 md:bg-[#f0f8ff]  fixed">
          <button
            className="bg-green-900 text-white rounded-lg p-3 hover:bg-green-800 hover:text-black"
            onClick={toggleTourRequest}
          >
            Request a tour
          </button>
          <button
            className=" rounded-lg p-3  hover:text-black bg-blue-900 hover:bg-blue-900 text-white"
            onClick={onCalculateClick}
          >
            Contact agent
          </button>
        </div>
      </div>
      <div className="w-full sm:w-[65%] mx-9 my-7">
        <h2 className="txt-btn text-xl  mx-5 font-bold">Near By</h2>
      </div>
      <div className="flex flex-col w-full sm:w-[65%] bg-[#f9f9f9] gap-3 mx-9 my-7  rounded-md  text-white">
        <div className="flex justify-evenly items-center gap-5 mb-5 py-4 mx-2">
          <p className="bg-gray-400 text-[#1c1a1a] font-bold  w-52 text-center py-2 px-4 txt-btn rounded-lg">
            <RestaurantIcon size="small" color="success" />
            Restaurant {property.restaurant}
          </p>
          <p className="bg-gray-400 text-[#1c1a1a] font-bold  w-52 text-center py-2 px-4 txt-btn rounded-lg">
            <StorefrontIcon size="small" color="success" />
            Super Market {property.market}
          </p>
          <p className="bg-gray-400 text-[#1c1a1a] font-bold  w-52 text-center py-2 px-4 txt-btn rounded-lg">
            <FitnessCenterIcon size="small" color="success" /> GYM{" "}
            {property.Gym}
          </p>
        </div>
        <div className="flex justify-evenly items-center mb-5 mx-2 gap-7">
          <p className="bg-gray-400 text-[#1c1a1a] font-bold  w-52 text-center py-2 px-4 txt-btn rounded-lg">
            <DirectionsBusIcon size="small" color="success" /> {property.bus}
          </p>
          <p className="bg-gray-400 text-[#1c1a1a] font-bold w-52 text-center py-2 px-4 txt-btn rounded-lg">
            <SchoolIcon size="small" color="success" /> School {property.school}
          </p>
          <p className="bg-gray-400 font-bold  text-[#1c1a1a] w-52 text-center py-2 px-4 txt-btn rounded-lg">
            <LocalHospitalIcon size="small" color="success" /> Hospital{" "}
          </p>
        </div>
      </div>
      <div className="w-full sm:w-[65%] mx-9 my-7">
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
            **Charming {property.bedrooms}-Bedroom Home in Conroe, TX – Priced
            to Sell!** Gated estate just 13 minutes from The Woodlands Mall,
            this spacious {property.bedrooms} -bedroom, {property.bathrooms}
            -bathroom home offers the perfect blend of convenience and privacy.
            Sitting on a generous half-acre lot, the property features a
            swimming pool, perfect for Texas summers. The home is in need of
            some TLC and can benefit from light cosmetic updates, making it an
            ideal opportunity for buyers looking to add their personal touch.
            Priced below market value, this home is a fantastic investment in a
            prime location. Don't miss out on this rare find!
          </p>
        </div>
      </div>
      <div className="w-full sm:w-[65%] mx-9 my-7">
        <h2 className="txt-btn text-xl py-4 mx-5 font-bold">
          Facts & features
        </h2>
        <p className="txt-btn mx-7  bg-[#f0f8ff] py-2 px-4 rounded-xl font-semibold text-green-900">
          Swimming pool
        </p>
        <div className="flex gap-5 justify-between">
          <div>
            <p className="txt-btn mx-9 my-6">Bedrooms & bathrooms</p>

            <ul className="txt-btn ml-14 text-gray-500 list-disc">
              <li>Bedrooms: {property.bedrooms} </li>
              <li>Bathrooms: {property.bathrooms} </li>
              <li>Puja Room: 1 </li>
            </ul>
            <p className="txt-btn ml-9 my-6">Heating</p>

            <ul className="txt-btn ml-14 text-gray-500 list-disc">
              <li className="ml-5">Electric {property.area} </li>
            </ul>
          </div>
          <div>
            <p className="txt-btn mr-16 my-6">Cooling</p>

            <ul className="txt-btn mr-16 text-gray-500 list-disc">
              <li className="ml-5">Electric </li>
            </ul>
            <div>
              <p className="txt-btn mr-9 my-6">Features</p>

              <ul className="txt-btn mr-16 text-gray-500 list-disc">
                <li className="ml-5">Number of fireplaces: 1</li>
              </ul>
            </div>
            <div>
              <p className="txt-btn mr-9 my-6">Interior area</p>

              <ul className="txt-btn mr-16 text-gray-500 list-disc">
                <li className="ml-5">Total structure area: {property.area} </li>
                <li className="ml-5">
                  Total interior livable area:{property.area} sqft
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="txt-btn mx-7 mt-8 bg-[#f0f8ff] py-2 px-4 rounded-xl font-semibold text-green-900">
          Property
        </p>
        <div className="flex gap-5 justify-between">
          <div>
            <p className="txt-btn mx-9 my-6">Features </p>

            <ul className="txt-btn ml-14 text-gray-500 list-disc">
              <li>Has private pool: Yes</li>
              <li>Pool features: In Ground </li>
            </ul>
          </div>
          <div>
            <p className="txt-btn mr-16 my-6">Details</p>

            <ul className="txt-btn mr-16 text-gray-500 list-disc">
              <li className="ml-5">Price: {property.price} </li>
              <li className="ml-5">size: {property.area} sqft</li>
              <li className="ml-5">Contact: 8079 82 21 22 / 8588 90 89 88 </li>
              <li className="ml-5">#{property.address} </li>
              <li className="ml-5">Year built: 2006 </li>
            </ul>
          </div>
        </div>
        <p className="txt-btn mx-7 mt-8 bg-[#f0f8ff] py-2 px-4 rounded-xl font-semibold text-green-900">
          Construction
        </p>
        <div className="flex gap-5 justify-between">
          <div>
            <p className="txt-btn mx-9 my-6">Type & style </p>

            <ul className="txt-btn ml-14 text-gray-500 list-disc">
              <li>Home type: SingleFamily</li>
              <li>Architectural style: English,Traditional </li>
              <li>Property subtype: Single Family Residence</li>
            </ul>
          </div>
          <div>
            <p className="txt-btn mr-16 my-6">Materials </p>

            <ul className="txt-btn mr-16 text-gray-500 list-disc">
              <li className="ml-5">Stone</li>
              <li className="ml-5">Foundation: Slab </li>
              <li className="ml-5">Roof: Composition</li>
            </ul>
          </div>
        </div>
        <p className="txt-btn mx-7 mt-8 bg-[#f0f8ff] py-2 px-4 rounded-xl font-semibold text-green-900">
          Utilities & green energy
        </p>
        <div className="flex gap-5 justify-between">
          <div>
            <ul className="txt-btn mt-5 ml-14 text-gray-500 list-disc">
              <li>Sewer: Septic Tank </li>
              <li>Water: Well</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Request a Tour Modal */}
      {showTourRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <TourRequest
            address={property.address}
            room={property.bedrooms}
            bath={property.bathrooms}
            area={property.area}
            image={property.image}
            price={property.price}
            closeTourForm={closeTourForm}
            showContactForm={showContactForm}
            closeContactForm={closeContactForm}
            onContactFormSubmit={onContactFormSubmit}
          />
        </div>
      )}

      {/* Contact Agent Modal */}
      <ContactFormModal
        showContactForm={showContactForm}
        closeContactForm={closeContactForm}
        onContactFormSubmit={onContactFormSubmit}
        address={property.address}
        price={property.price}
      />
    </div>
  );
};

export default PropertyDetails;
