import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CustBook = () => {
  const [hotel, setHotel] = useState(null);
  const { id } = useParams(); 
  const navigate = useNavigate();

  const books = (roomId) => {
    navigate(`/Booked/${roomId}`); 
  };

  useEffect(() => {
    console.log("Fetching room details...");
    
    axios
      .get(`http://localhost:8008/booking/id?id=${id}`) 
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => {
        console.error("Error fetching room details:", err.message);
      });
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="text-center mb-4">Room Details</h1>

        {hotel ? (
          <div className="card-body">
<img
               src="https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg"
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
              
            <p className="card-text"><strong>Id:</strong> {hotel.roomId}</p>
            <p className="card-text"><strong>Room Number:</strong> {hotel.room_Number}</p>
            <p className="card-text"><strong>Status:</strong> {hotel.status}</p>
            <p className="card-text"><strong>Cost Per Day:</strong> $ 1000{hotel.cost_Per_Day}</p>
            <p className="card-text"><strong>Room Type:</strong> {hotel.room_Type}</p>
          </div>
        ) : (
          <h2 className="text-center text-danger">Loading room details...</h2>
        )}

        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              if (hotel) books(hotel.roomId);
            }}
            disabled={!hotel}
          >
            Book Now
          </button>

          <Link to="/rooms" className="btn btn-secondary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustBook;
