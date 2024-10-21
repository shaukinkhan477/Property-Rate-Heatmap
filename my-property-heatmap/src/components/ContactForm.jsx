import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import useForm from "./hooks/useForm";
import TextField from "./formField/TextField";
import SubmitButton from "./formField/SubmitButton";
import SuccessMessage from "./formField/SuccessMessage";

const ContactForm = () => {
  //   const { formData, isSubmitted, handleChange, handleSubmit } = useForm({
  //     name: "",
  //     email: "",
  //     phone: "",
  //   });

  //   const onFormSubmit = (e) => {
  //     e.preventDefault(); // Ensure preventDefault is called to avoid form reloading

  //     if (formData.name && formData.email && formData.phone) {
  //       // Pass the event object to handleSubmit
  //       handleSubmit(e); // Call your custom form submit logic

  //       if (!isSubmitted) {
  //         onSubmit(formData); // Pass the form data to the onSubmit callback
  //       }
  //     } else {
  //       alert("Please fill out all required fields.");
  //     }
  //   };

  return (
    <div className="sticky left-7 right-32 w-full md:w-[300px] p-4 shadow-lg bg-[#499f49]">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="text-lg font-body font-bold mb-4 text-center">
          <WhatsAppIcon /> Contact our Experts
        </h3>
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
          <SubmitButton>Contact Now</SubmitButton>
        </form>
        {isSubmitted && <SuccessMessage />}
      </div>
    </div>
  );
};

export default ContactForm;
