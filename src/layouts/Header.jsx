import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-dark fixed-top text-white py-3 px-4 d-flex justify-content-between align-items-center">
      {/* Company Name */}
      <h2 className="m-0">Luxury Stays</h2>
      
      {/* User Icon */}
      <FaUserCircle size={28} />
    </header>
  );
}

export default Header;