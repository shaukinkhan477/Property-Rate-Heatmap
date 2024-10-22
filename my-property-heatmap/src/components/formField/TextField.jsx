import React from "react";
// import { motion } from "framer-motion";

const TextField = ({ type, name, value, onChange, placeholder, required }) => (
  <div className="mb-4">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-md font-body"
      required={required}
    />
  </div>
);

export default TextField;
