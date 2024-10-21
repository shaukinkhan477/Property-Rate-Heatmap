import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleRoute = () => {
    navigate("/");
  };

  return (
    <header className="w-full px-4 md:px-8 py-2 bg-white flex justify-between items-center border-b border-gray-300 fixed top-0 shadow-xl z-50 ">
      <img
        src="https://reecocefe1aea.b-cdn.net/wp-content/uploads/2022/09/Reecocefe-Logo.webp.bv.webp?bv_host=reecocefe.in"
        alt="LOgo"
        className="w-48 md:w-60 lg:w-72 rounded-3xl ml-3  cursor-pointer"
        onClick={() => handleRoute()}
      />
    </header>
  );
};

export default Header;
