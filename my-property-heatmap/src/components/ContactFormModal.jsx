import React from "react";

// import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactFormModal = ({
  showContactForm,
  closeContactForm,
  onContactFormSubmit,
  address,
  price,
}) =>
  showContactForm && (
    <div className="fixed inset-0 z-50 flex justify-center items-center  bg-opacity-50 ">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-white p-1 rounded-full hover:text-gray-900 font-bold font-body bg-green-900 px-2 "
          onClick={closeContactForm}
        >
          X{/* &times; */}
        </button>
        <div className="">
          <h3 className="text-lg font-body font-bold mb-4 text-center">
            <WhatsAppIcon color="success" />{" "}
            <span className="txt-btn text-green-800">Contact our Experts</span>
          </h3>
          <ContactForm
            onClose={closeContactForm}
            onSubmit={onContactFormSubmit}
            address={address}
            price={price}
            name="Contact Now"
          />
        </div>
      </div>
    </div>
  );

export default ContactFormModal;
