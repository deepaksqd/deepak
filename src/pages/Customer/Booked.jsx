import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const bookingSchema = yup.object({
  fromDate: yup.date().required("From Date is required"),
  toDate: yup.date().required("To Date is required"),
  adult: yup.number().positive().integer().min(1, "At least 1 adult required").required(),
  children: yup.number().integer().min(0, "Children count cannot be negative").required(),
});

const Booked = () => {
  const { roomId } = useParams(); 
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8008/booking/id/${roomId}`)
      .then(({ data }) => setHotel(data))
      .catch((err) => console.error("Error fetching hotel:", err));
  }, [roomId]);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      await axios.post(
        `http://localhost:8008/booking/update?id=${roomId}`, ...data ,
         
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Booking successful!");
      reset();
      navigate(`/confirmation/${roomId}`); 
    } catch (error) {
      console.error("Booking failed:", error.response?.data || error.message);
      alert("Booking failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="text-center mb-4">Book a Room</h1>

        {hotel ? (
          <div className="card-body">
            <p><strong>Room ID:</strong> {hotel.roomId}</p>
            <p><strong>Room Type:</strong> {hotel.room_Type}</p>
            <p><strong>Cost Per Day:</strong> ${hotel.cost_Per_Day}</p>
          </div>
        ) : (
          <h2 className="text-center text-danger">Loading room details...</h2>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {[
            { label: "From Date", name: "fromDate", type: "date" },
            { label: "To Date", name: "toDate", type: "date" },
            { label: "Adults", name: "adult", type: "number", min: 1 },
            { label: "Children", name: "children", type: "number", min: 0 },
          ].map(({ label, name, type, min }) => (
            <div key={name} className="mb-3">
              <label className="form-label">{label}:</label>
              <input type={type} {...register(name)} className="form-control" min={min} />
              <p className="text-danger">{errors[name]?.message}</p>
            </div>
          ))}

          <div className="d-flex justify-content-between mt-4">
            <button type="submit" className="btn btn-primary" disabled={isLoading}>
              {isLoading ? "Booking..." : "Confirm Booking"}
            </button>
            <Link to="/" className="btn btn-secondary">Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booked;
