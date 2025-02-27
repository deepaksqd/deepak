import React from "react";
import { motion } from "framer-motion";
import LandingHeader from "../component/LandingHeader";
import Footer from "../component/Footer";

function About() {
  return (
    <div className="bg-light vw-100 py-10 vh-100">
      {/* Header */}
      <div className="sticky-md-top">

      <LandingHeader />
      </div>

      {/* About Section */}
      <motion.section 
        className="container py-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-primary mb-4">About Us</h2>
        <div className="row">
          <div className="col-md-6">
            <motion.img 
              src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              className="img-fluid rounded shadow-lg"
              alt="About Our Hotel"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
            >
              <p className="lead">
                Welcome to <b>Luxury Stays</b>, where hospitality meets comfort. Our hotel offers world-class services, premium rooms, and a memorable experience.
              </p>
              <p>
                With a commitment to excellence, we ensure our guests receive top-notch accommodations, delightful dining, and unparalleled customer service.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <div className="fixed-bottom ">
      <Footer />
      </div>
    </div>
  );
}

export default About;