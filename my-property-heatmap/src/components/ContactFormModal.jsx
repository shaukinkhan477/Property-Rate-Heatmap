import React from "react";

// import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const ContactFormModal = ({
  showContactForm,
  closeContactForm,
  onContactFormSubmit,
  address,
  price,
}) =>
  showContactForm && (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 ">
      <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-black p-1 rounded-full hover:text-gray-900 font-bold font-body "
          onClick={closeContactForm}
        >
          X{/* &times; */}
        </button>
        <div className="lg:ml-40">
          <ContactForm
            onClose={closeContactForm}
            onSubmit={onContactFormSubmit}
            address={address}
            price={price}
          />
        </div>
      </div>
    </div>
  );

export default ContactFormModal;
