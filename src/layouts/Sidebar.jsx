import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaHotel, FaBed, FaClipboardList, FaMoneyBillWave } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex " style={{zIndex:2,marginTop:"50px"}}>
      {/* Sidebar Menu with Animation */}
      <motion.aside
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: isOpen ? 250 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-dark text-white vh-100 position-fixed d-flex flex-column p-3 shadow"
        style={{ overflow: "hidden" }}
      >
        {/* Sidebar Header */}
        <div className="d-flex align-items-center mb-4">
          <FaHotel size={28} className="me-2 text-warning" />
          <h5 className="m-0">Hello</h5>
        </div>

        {/* Sidebar Menu */}
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white d-flex align-items-center py-2" to="/rooms">
              <FaBed className="me-2" /> Rooms
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white d-flex align-items-center py-2" to="/bookings">
              <FaClipboardList className="me-2" /> Bookings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white d-flex align-items-center py-2" to="/payments">
              <FaMoneyBillWave className="me-2" /> Payments
            </Link>
          </li>
        </ul>
      </motion.aside>

      {/* Toggle Button - Always Visible */}
      <button
        className="btn btn-dark position-fixed m-3"
        onClick={toggleSidebar}
        style={{ zIndex: 1050, left: isOpen ? "260px" : "10px", transition: "left 0.3s" }}
      >
        <FaBars />
      </button>
    </div>
  );
}

export default Sidebar;