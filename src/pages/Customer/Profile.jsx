import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an API request
    axios
      .get(`http://localhost:8008/UserController/id?id=${id}`) // Replace with your actual API URL
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (!user) {
    return <h2 className="text-center mt-5">Error loading profile</h2>;
  }

  return (
    <div className="container mt-4">

      <h2 className="text-center">Welcome, {user.name}</h2>
      <div className="text-center">
        <button className="btn btn-primary m-2">Edit Profile</button>
        <button className="btn btn-danger m-2" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>
             
      <div className="card p-4 mt-3">
        <h4>My Profile Details</h4>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone Number:</strong> {user.contact_Number}</p>
      </div>

      <div className="card p-4 mt-3">
        <h4>My Booking History</h4>
        <p><strong>Booking Id:</strong> {user.booking_Id}</p>
        <p><strong>Check-in Date:</strong> {user.booking.from_Date}</p>
        <p><strong>Check-out Date:</strong> {user.booking.to_Date}</p>
        {/* <p><strong>Total Guests:</strong> {user.booking.adult}</p> */}
        <p><strong>Room Type:</strong> {user.booking.room_Type}</p>
        <img src={user.booking.image} alt="Room" className="img-fluid mt-2" />
      </div>

    </div>
  );
};

export default Profile;