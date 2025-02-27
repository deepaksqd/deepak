import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const registerSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
  contactNumber: yup.string().matches(/^[0-9]+$/, "Must be only digits").required("Contact Number is required"),
  address: yup.string().required("Address is required"),
});

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema) });

 
  const onSubmit  = (data) => {
    axios.post(`http://your-api-url/rooms/${data}`,  {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        alert('Register successfully');
        navigate('/');
      })
      .catch((err) => {
        console.error('Error updating room data', err.message);
      });
  };
  return (
    <div className="d-flex justify-content-center align-items-center vw-100 vh-130 bg-light">
      <motion.div 
        className="card p-4 shadow-lg w-25"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-primary">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label fw-bold">Username</label>
            <input type="text" className="form-control" placeholder="Enter Username" {...register("username")} />
            <p className="text-danger small">{errors.username?.message}</p>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input type="password" className="form-control" placeholder="Enter Password" {...register("password")} />
            <p className="text-danger small">{errors.password?.message}</p>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm Password" {...register("confirmPassword")} />
            <p className="text-danger small">{errors.confirmPassword?.message}</p>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Contact Number</label>
            <input type="text" className="form-control" placeholder="Enter Contact Number" {...register("contactNumber")} />
            <p className="text-danger small">{errors.contactNumber?.message}</p>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Address</label>
            <textarea className="form-control" placeholder="Enter Address" {...register("address")} />
            <p className="text-danger small">{errors.address?.message}</p>
          </div>

          <motion.button 
            type="submit" 
            className="btn btn-primary w-100 fw-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </form>
        <div className="text-center mt-3">
          <Link to="/login" className="text-decoration-none text-secondary fw-bold">
            Already have an account? <span className="text-primary">Login</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;