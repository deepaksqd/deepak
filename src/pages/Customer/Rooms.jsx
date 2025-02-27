import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Rooms() {
  const [rooms, setRooms] = useState([]); // ✅ Fix: Initialize as an empty array
  const navigate = useNavigate();

  const viewData = (roomId) => {
    navigate(`/CustBook/` + roomId);
    console.log(roomId);
  }
 
  useEffect(() => {
    axios
      .get("http://localhost:8008/room/listall")
      .then((res) => {
        setRooms(res.data); // ✅ Fix: Extract `res.data`
      })
      .catch((err) => {
        console.error("Error fetching rooms:", err);
      });
  }, []);

  console.log("Rooms Data:", rooms); // ✅ Debugging log

  return (
    <div className="container mt-5" style={{ position: "relative", zIndex: 1 }}>
      <h2 className="text-center mb-4">Our Rooms</h2>
      <div className="row">
        {rooms.map((room) => (
          <div key={room.roomId} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src="https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg"
                className="card-img-top"
                alt={room.name}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="card-title">
                  <strong>Id:</strong> {room.roomId}
                </p>
                <p className="card-text">
                  <strong>Room Number:</strong> {room.room_Number}
                </p>
                <p className="card-text">
                  <strong>Status:</strong> {room.status}
                </p>
                <p className="fw-bold">
                  <strong>Price:</strong> ${room.cost_Per_Day} / night
                </p>
                <p className="card-text">
                  <strong>Room Type:</strong> {room.room_Type}
                </p>
                <button
                  className="btn btn-primary mt-2 w-100"
                  onClick={() => viewData(room.roomId)}
                >
                  View/Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
