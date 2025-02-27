import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit =((data)=>{
 
          axios.post("htttp njd" ,data({

            Header:{"Content-Type":"Application/json"}
          }))

          .then((res)=>{
            
            console.log(" ")
          })
          .catch((err)=>{
             
            console.log(err.message)
          })


  })

         

  return (
    <div className="d-flex justify-content-center align-items-center vw-100 vh-100 bg-light">
      <motion.div 
        className="card p-4 shadow-lg w-25"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-primary">Login</h2>
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

          <motion.button 
            type="submit" 
            className="btn btn-primary w-100 fw-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>
        <div className="text-center mt-3">
          <Link to="/register" className="text-decoration-none text-secondary fw-bold">
            Don't have an account? <span className="text-primary">Register</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;