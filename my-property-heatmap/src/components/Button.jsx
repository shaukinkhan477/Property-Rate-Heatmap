import React from "react";

const Button = ({ onClick, name }) => {
  return (
    <button
      className="txt-btn bg-[#ffffffb3] py-2 px-3 rounded-lg shadow-sm hover:bg-[#ffffff77] hover:rounded-xl  text-black font-bold text-xs hover:text-sm"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
