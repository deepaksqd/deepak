import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LandingHeader from "../component/LandingHeader";
import Footer from "../component/Footer";


function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-light">
        <div className="sticky-md-top ">

        <LandingHeader/>
        </div>
      {/* Hero Section */}
      <motion.section 
        className="container-fluid d-flex flex-column justify-content-center align-items-center text-center vw-100 py-5 bg-dark text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="display-3 fw-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Luxury Stays
        </motion.h1>
        <motion.p 
          className="lead"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Experience the finest hospitality with our premium rooms and world-class services.
        </motion.p>
        <motion.button 
          className="btn btn-primary btn-lg mt-3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/login")}
        >
          Book Now
        </motion.button>
      </motion.section>

      {/* Rooms Section */}
      <section className="container py-5">
        <h2 className="text-center text-primary mb-4">Our Rooms</h2>
        <div className="row">
          {/* Room 1 */}
          <motion.div 
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card shadow-lg">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Luxury Room" />
              <div className="card-body">
                <h5 className="card-title">Luxury Suite</h5>
                <p className="card-text">A spacious suite with a breathtaking city view and top-notch amenities.</p>
              </div>
            </div>
          </motion.div>

          {/* Room 2 */}
          <motion.div 
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card shadow-lg">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Deluxe Room" />
              <div className="card-body">
                <h5 className="card-title">Deluxe Room</h5>
                <p className="card-text">Perfect for a comfortable stay with elegant interiors and modern facilities.</p>
              </div>
            </div>
          </motion.div>

          {/* Room 3231 */}
          <motion.div 
            className="col-md-4 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="card shadow-lg">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Standard Room" />
              <div className="card-body">
                <h5 className="card-title">Standard Room</h5>
                <p className="card-text">A budget-friendly room with cozy ambiance and essential amenities.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="sticky-md-bottom ">

        <Footer/>
      </div>
    </div>
  );
}

export default LandingPage;