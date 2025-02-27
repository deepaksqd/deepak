import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Link } from "react-router-dom";


const RoomCr = () => {

  const[roomId,setRoomId]=useState("")
  const[room_Number,setRoom_Number]=useState("")
  const[status,setStatus]=useState("")
  const[cost_Per_Day,setCost_Per_Day]=useState("")
  const[room_Type,setRoom_Type]=useState("")



  const schema = yup.object().shape({
    room_Type: yup.string().required("Room Type is required"),
    status: yup.boolean().required("Status is required"),
    room_Number: yup.string().required("Room number is required"),
    roomId: yup
      .number()
      .typeError("Room ID must be a number")
      .positive("Room ID must be positive")
      .required("Room ID is required"),
    cost_Per_Day: yup
      .number()
      .typeError("Cost must be a number")
      .positive("Cost must be positive")
      .required("Cost per day is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handle = (data) => {
    data.Status = data.Status === "true"; // Convert checkbox value to boolean

    axios
      .post("http://localhost:8008/room/create", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        alert("Room created successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container">
      <h2>Add New Room</h2>
      <form onSubmit={handleSubmit(handle)}>
        <table>
        <div className="form-group">
          <label>Room ID:</label>
          <input type="text" placeholder="Enter ID" {...register('roomId')} />
          <span className="error-message">{errors.roomId?.message}</span>
        </div>

        <div className="form-group">
          <label>Room Number:</label>
          <input type="text" placeholder="Room number" {...register('room_Number')} />
          <span className="error-message">{errors.room_Number?.message}</span>
        </div>

        <div className="form-group checkbox-container">
          <input
            type="checkbox"
            {...register('status')}
            onChange={(e) => setValue("status", e.target.checked)}
          />
          <label>Status</label>
        </div>
        <span className="error-message">{errors.status?.message}</span>

        <div className="form-group">
          <label>Cost per Day:</label>
          <input type="number" placeholder="Cost per day" {...register('cost_Per_Day')} />
          <span className="error-message">{errors.cost_Per_Day?.message}</span>
        </div>

        <div className="form-group">
          <label>Room Type:</label>
          <input type="text" placeholder="Room type" {...register('room_Type')} />
          <span className="error-message">{errors.room_Type?.message}</span>
        </div>

        <div className="btn-container">
          <button type="submit" className="btn btn-primary">Add Room</button>
          <Link to="/RoomShow" className="btn btn-info">Back</Link>
        </div>
        </table>
      </form>
    </div>
  );
};

export default RoomCr;
