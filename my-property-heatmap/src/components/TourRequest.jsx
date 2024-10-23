import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ContactForm from "./ContactForm";
import FastRewindIcon from "@mui/icons-material/FastRewind";

// Utility to generate time slots in a 12-hour format with AM/PM
const generateTimeSlots = () => {
  const times = [];
  const periods = ["AM", "PM"];

  periods.forEach((period) => {
    for (let hour = 1; hour <= 12; hour++) {
      times.push(`${hour}:00 ${period}`);
      if (hour < 12) times.push(`${hour}:30 ${period}`);
    }
  });
  return times.slice(10, 34); // Limits to typical tour times (11:00 AM - 7:30 PM)
};

// Utility to generate dates dynamically excluding Sundays
const generateDates = (daysToShow = 10) => {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < daysToShow; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    if (date.getDay() === 0) continue; // Skip Sundays

    const day = date
      .toLocaleString("en-US", { weekday: "short" })
      .toUpperCase();
    const monthDay = date.toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
    });

    dates.push({ day, monthDay });
  }
  return dates;
};

const TourRequest = ({
  address,
  room,
  area,
  bath,
  image,
  closeTourForm,
  showContactForm,
  closeContactForm,
  onContactFormSubmit,
  price,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [alternateDate, setAlternateDate] = useState(null);
  const [alternateTime, setAlternateTime] = useState(null);

  const [showAlternate, setShowAlternate] = useState(false);

  const [startIndex, setStartIndex] = useState(0); // Main slider index
  const [altStartIndex, setAltStartIndex] = useState(0); // Alternate slider index

  const [formStep, setFormStep] = useState(1); // step of form
  const [error, setError] = useState(""); // Error state

  const dates = generateDates(10);
  const timeSlots = generateTimeSlots();

  // User information state
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const isSelected = (date, selected) =>
    selected?.day === date.day && selected?.monthDay === date.monthDay;

  const handleNextMain = () => {
    if (startIndex + 5 < dates.length) setStartIndex(startIndex + 1);
  };

  const handlePreviousMain = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNextAlt = () => {
    if (altStartIndex + 5 < dates.length) setAltStartIndex(altStartIndex + 1);
  };

  const handlePreviousAlt = () => {
    if (altStartIndex > 0) setAltStartIndex(altStartIndex - 1);
  };

  const handleNextStep = () => {
    if (!selectedDate || !selectedTime) {
      setError("Please select both a date and time.");
    } else {
      setError(""); // Clear error
      setFormStep(2);
    }
  };
  const handleCancel = () => setFormStep(1);

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex justify-end items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 py-1 text-white txt-btn px-2 rounded-full"
          onClick={closeTourForm}
        >
          X
        </button>
      </div>
      <div className="txt-btn text-center mb-5 border-b-2">
        <h2 className="text-xl font-semibold mb-4">Request a Tour</h2>
      </div>

      {/* Property Info */}
      {formStep === 1 ? (
        <>
          <div className="flex items-start mb-4">
            <img
              src={image}
              alt="Property"
              className="w-24 h-16 rounded-lg object-cover"
            />
            <div className="ml-4">
              <p className="text-sm txt-btn">{address}</p>
              <p className="text-sm text-gray-600 txt-btn">
                {room} Bed | {bath} Bath | <strong>{area} sqft</strong>
              </p>
            </div>
          </div>

          {/* Main Date Selection */}
          <h3 className="text-sm font-semibold mb-2 txt-btn">
            Select a Date & Time
          </h3>
          <div className="flex items-center mb-4 space-x-2">
            {startIndex > 0 && (
              <button onClick={handlePreviousMain} className="p-2">
                ◀️
              </button>
            )}

            <div className="flex overflow-x-auto space-x-2 txt-btn">
              {dates.slice(startIndex, startIndex + 5).map((date, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDate(date)}
                  className={`w-24 py-2 border rounded-lg ${
                    isSelected(date, selectedDate)
                      ? "border-blue-700 bg-blue-100 text-blue-700"
                      : "border-gray-300"
                  }`}
                >
                  <span className="block font-semibold">{date.day}</span>
                  <span className="block text-sm">{date.monthDay}</span>
                </button>
              ))}
            </div>

            {startIndex + 5 < dates.length && (
              <button onClick={handleNextMain} className="p-2">
                ▶️
              </button>
            )}
          </div>

          {/* Main Time Picker */}
          <select
            className="w-full mb-4 p-2 border rounded-lg txt-btn"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="" disabled>
              Select a time
            </option>
            {timeSlots.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>

          {/* Add Alternate Time */}
          <div className="flex justify-between items-center txt-btn">
            <button
              className="flex items-center text-blue-500 text-sm ml-3 mb-4 hover:text-green-700"
              onClick={() => setShowAlternate(!showAlternate)}
            >
              <span className="mr-1 ">➕</span> Add a time
            </button>

            <button
              className="flex items-center text-blue-500 mr-4 text-sm mb-4 hover:text-green-700"
              onClick={() => setShowAlternate(!showAlternate)}
            >
              {showAlternate && <DeleteIcon />}
            </button>
          </div>

          {/* Alternate Date and Time Selection */}
          {showAlternate && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2 txt-btn">
                Alternate Date & Time
              </h3>
              <div className="flex items-center mb-4  space-x-2">
                {altStartIndex > 0 && (
                  <button onClick={handlePreviousAlt} className="p-2 ">
                    ◀️
                  </button>
                )}

                <div className="flex overflow-x-auto space-x-2 txt-btn">
                  {dates
                    .slice(altStartIndex, altStartIndex + 5)
                    .map((date, index) => (
                      <button
                        key={index}
                        onClick={() => setAlternateDate(date)}
                        className={`w-24 py-2 border rounded-lg ${
                          isSelected(date, alternateDate)
                            ? "border-green-700 bg-green-100 text-green-700"
                            : "border-gray-300"
                        }`}
                      >
                        <span className="block font-semibold">{date.day}</span>
                        <span className="block text-sm">{date.monthDay}</span>
                      </button>
                    ))}
                </div>

                {altStartIndex + 5 < dates.length && (
                  <button onClick={handleNextAlt} className="p-2">
                    ▶️
                  </button>
                )}
              </div>

              <select
                className="w-full mb-4 p-2 border rounded-lg txt-btn"
                value={alternateTime}
                onChange={(e) => setAlternateTime(e.target.value)}
              >
                <option value="" disabled>
                  Select a time
                </option>
                {timeSlots.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Submit Button */}
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-lg txt-btn"
            onClick={handleNextStep}
          >
            Next
          </button>
          {error && (
            <p className="text-red-500 text-sm my-4 text-center txt-btn tracking-wide">
              {error}
            </p>
          )}
        </>
      ) : (
        <div>
          <button
            className="px-2 mb-3 bg-blue-500 hover:bg-blue-700  text-white py-1 rounded-xl txt-btn"
            onClick={handleCancel}
          >
            <FastRewindIcon />
          </button>
          <ContactForm
            onClose={closeContactForm}
            onSubmit={onContactFormSubmit}
            address={address}
            price={price}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            alternateDate={alternateDate}
            alternateTime={alternateTime}
            name="Request"
            closeTourForm={closeTourForm}
          />
        </div>
      )}
    </div>
  );
};

export default TourRequest;
