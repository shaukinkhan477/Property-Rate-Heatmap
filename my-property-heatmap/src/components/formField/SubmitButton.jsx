import React from "react";
// import { motion } from "framer-motion";

const SubmitButton = ({ onClick, children }) => (
  <button
    type="submit"
    className="w-full bg-[#228b22] text-white py-2 rounded-md font-body"
    onClick={onClick}
  >
    {children}
  </button>
);

export default SubmitButton;
