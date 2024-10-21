// import React from "react";
// import Header from "./Header";

// const HelloPage = () => {
//   return (
//     <div>
//       <Header />
//       <div>

//       </div>
//     </div>
//   );
// };

// export default HelloPage;

// import React, { useState } from "react";
// import Header from "./Header";

// const images = [
//   "https://photos.zillowstatic.com/fp/88a7aa4fa6a2a177d183b55175c0fc1c-cc_ft_960.webp",
//   "https://photos.zillowstatic.com/fp/b8363dc0da5c8f18fc6828e300b4747f-cc_ft_960.webp",
//   "https://photos.zillowstatic.com/fp/42119f8919e52a70b874f00757f5064e-cc_ft_576.webp",
//   "https://photos.zillowstatic.com/fp/7704785c06abf998d6bf6a1889d2c027-cc_ft_960.webp",
// ];

// const HelloPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <div>
//       <Header />
//       <div className=" mx-5 lg:mx-10 grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20 lg:mt-32 border-2 border-green-900 ">
//         {/* Main Image */}
//         <div className="lg:col-span-2">
//           <img
//             src={images[currentIndex]}
//             alt="Main Slide"
//             className="w-full h-96 object-cover rounded-lg"
//           />
//         </div>

//         {/* Smaller Images */}
//         <div className="grid grid-rows-2 gap-4">
//           <img
//             src={images[(currentIndex + 1) % images.length]}
//             alt="Thumbnail 1"
//             className="w-full h-48 object-cover rounded-lg"
//           />
//           <img
//             src={images[(currentIndex + 2) % images.length]}
//             alt="Thumbnail 2"
//             className="w-full h-48 object-cover rounded-lg"
//           />
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <div className="flex justify-between mt-4 lg:mt-6">
//         <button
//           onClick={() =>
//             setCurrentIndex((currentIndex - 1 + images.length) % images.length)
//           }
//           className="bg-gray-200 p-2 rounded-full shadow-lg focus:outline-none"
//         >
//           &#10094;
//         </button>
//         <button
//           onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
//           className="bg-gray-200 p-2 rounded-full shadow-lg focus:outline-none"
//         >
//           &#10095;
//         </button>
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {images.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === idx ? "bg-blue-500" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HelloPage;

import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const images = [
  "https://photos.zillowstatic.com/fp/88a7aa4fa6a2a177d183b55175c0fc1c-cc_ft_960.webp",
  "https://photos.zillowstatic.com/fp/b8363dc0da5c8f18fc6828e300b4747f-cc_ft_960.webp",
  "https://photos.zillowstatic.com/fp/42119f8919e52a70b874f00757f5064e-cc_ft_576.webp",
  "https://photos.zillowstatic.com/fp/7704785c06abf998d6bf6a1889d2c027-cc_ft_960.webp",
  "https://photos.zillowstatic.com/fp/909619fbbed36f79180bbeabf95de8f8-cc_ft_960.webp",
  "https://photos.zillowstatic.com/fp/cd768b8e1036bc184dbfa91df827b303-cc_ft_576.webp",
];

const HelloPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <Header />
      {/* Grid Layout for Main Image and Thumbnails */}
      <div className="mt-20 lg:mt-32 mx-5 lg:mx-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main Image */}
        <div className="lg:col-span-2" onClick={() => openModal(currentIndex)}>
          <img
            src={images[currentIndex]}
            alt="Main Slide"
            className="w-full h-96 object-cover rounded-lg cursor-pointer"
          />
        </div>

        {/* Smaller Images */}
        <div className="grid grid-rows-2 gap-4">
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt="Thumbnail 1"
            className="w-full h-48 object-cover rounded-lg cursor-pointer"
            onClick={() => openModal((currentIndex + 1) % images.length)}
          />
          <img
            src={images[(currentIndex + 2) % images.length]}
            alt="Thumbnail 2"
            className="w-full h-48 object-cover rounded-lg cursor-pointer"
            onClick={() => openModal((currentIndex + 2) % images.length)}
          />
        </div>
        <div className="grid grid-rows-2 gap-4">
          <img
            src={images[(currentIndex + 3) % images.length]}
            alt="Thumbnail 2"
            className="w-full h-48 object-cover rounded-lg cursor-pointer"
            onClick={() => openModal((currentIndex + 2) % images.length)}
          />
          <img
            src={images[(currentIndex + 4) % images.length]}
            alt="Thumbnail 2"
            className="w-full h-48 object-cover rounded-lg cursor-pointer"
            onClick={() => openModal((currentIndex + 2) % images.length)}
          />
        </div>
      </div>

      {/* Modal for Zoomable Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-green-800 p-2 rounded-full focus:outline-none z-50"
            >
              &#10005;
            </button>

            {/* Image */}
            <img
              src={images[currentIndex]}
              alt="Zoomed Image"
              className="max-w-full max-h-full object-contain"
            />

            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white z-50"
            >
              &#10094;
            </button>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white z-50"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row justify-evenly items-center ml-9 mr-9 mt-7 shadow-lg">
        <div className="txt-btn flex flex-col gap-3 mb-2">
          <h2 className="text-xl">
            Price: <span className="text-green-700">₹ 25000</span>
          </h2>
          <p className="text-lg ml-4"># 123 Main St, Whitefield</p>
          <div className="txt-btn bg-[#f9f9f9] text-center p-1 rounded-xl text-lg cursor-pointer text-[#ff3520] hover:text-black">
            <Link to="https://affordable-cal.vercel.app/">
              <p>Estimate Calculator</p>
            </Link>
          </div>
        </div>
        <div className="flex  gap-4  justify-between items-center mb-2">
          <div className="flex flex-col justify-between items-center">
            <p className="txt-btn text-lg">4</p>
            <p className="tracking-wider font-serif font-thin">Bed</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <p className="txt-btn text-lg">2</p>
            <p className="tracking-wider font-serif font-thin">Bath</p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <p className="txt-btn text-lg tracking-widest">3,011</p>
            <p className="tracking-wider font-serif font-thin">sqft</p>
          </div>
        </div>
        <div className="flex flex-col shadow-sm gap-2 items-center border border-[#2d486f] txt-btn py-4 px-9 rounded-lg mt-2 bg-[#f0f8ff]">
          <button className="bg-green-900 text-white rounded-lg p-3 hover:bg-green-800 hover:text-black">
            Request a tour
          </button>
          <button className="border-2 border-green-900 text-green-600 rounded-lg p-3 hover:border-blue-900 hover:text-black ">
            Contact agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelloPage;
