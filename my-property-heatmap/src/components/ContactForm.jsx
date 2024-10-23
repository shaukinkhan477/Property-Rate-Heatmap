import React, { useState } from "react";

import useForm from "./hooks/useForm";
import TextField from "./formField/TextField";
import SubmitButton from "./formField/SubmitButton";
import SuccessMessage from "./formField/SuccessMessage";

const ContactForm = ({
  onSubmit,
  address = "",
  price = "",
  selectedDate,
  selectedTime,
  alternateDate,
  alternateTime,
  name,
  onClose,
  closeTourForm,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { formData, isSubmitted, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
    details: `Address: ${address}\nPrice: ${price}\nDate: ${
      selectedDate?.day || "N/A"
    } ${selectedDate?.monthDay || ""}\nTime: ${
      selectedTime || "N/A"
    }\nAlternate Date: ${alternateDate?.day || "N/A"} ${
      alternateDate?.monthDay || ""
    }\nAlternate Time: ${alternateTime || "N/A"}`,
  });

  const onFormSubmit = (e) => {
    e.preventDefault(); // Ensure preventDefault is called to avoid form reloading

    if (formData.name && formData.email && formData.phone) {
      // Pass the event object to handleSubmit
      handleSubmit(e); // Call your custom form submit logic

      if (!isSubmitted) {
        onSubmit(formData); // Pass the form data to the onSubmit callback
        onClose();
        closeTourForm();
      }
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    // <div className="sticky left-7 right-32 w-full md:w-[300px] p-4 shadow-lg ">
    <>
      {/* <div className=" rounded-lg p-6 shadow-md txt-btn"> */}

      <form onSubmit={onFormSubmit}>
        <TextField
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <TextField
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email ID"
          required
        />
        <TextField
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 Phone Number"
          required
        />
        <TextField
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
        />
        <TextField
          type="text"
          name="details"
          value={formData.details}
          onChange={handleChange}
          disabled={isDisabled}
        />
        <SubmitButton>{name}</SubmitButton>
      </form>
      {isSubmitted && <SuccessMessage />}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default ContactForm;
