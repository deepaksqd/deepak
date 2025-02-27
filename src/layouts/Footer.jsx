import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer 
      className="bg-dark text-white text-center py-4 mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className="mb-1">&copy; {new Date().getFullYear()} Luxury Stays. All rights reserved.</p>
      
      <div className="d-flex justify-content-center gap-3">
        <motion.a 
          href="#" className="text-white fs-4"
          whileHover={{ scale: 1.2 }}
        >
          <FaFacebook />
        </motion.a>
        <motion.a 
          href="#" className="text-white fs-4"
          whileHover={{ scale: 1.2 }}
        >
          <FaTwitter />
        </motion.a>
        <motion.a 
          href="#" className="text-white fs-4"
          whileHover={{ scale: 1.2 }}
        >
          <FaInstagram />
        </motion.a>
      </div>
    </motion.footer>
  );
}

export default Footer;