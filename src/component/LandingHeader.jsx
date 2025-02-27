import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import { FaHome, FaBed, FaInfoCircle, FaPhone, FaSignInAlt } from "react-icons/fa";

function LandingHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          Luxury Stays
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
            
             
        {/* Navbar Links */}
        <motion.div 
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                <FaHome className="me-1" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/rooms">
                <FaBed className="me-1" /> Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                <FaInfoCircle className="me-1" /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                <FaPhone className="me-1" /> Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">
                <FaSignInAlt className="me-1" /> Login
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}

export default LandingHeader;