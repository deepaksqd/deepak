import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function RoomShow() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  // Fetch rooms from API
  useEffect(() => {
    axios
      .get("http://localhost:8008/room/listall") // Replace with actual API URL
      .then((res) => {
        setRooms(res.data);
      })
      .catch((err) => {
        console.error("Error fetching rooms:", err);
      });
  }, []);

  // Navigate to Edit Page
  const editDetails = (roomId) => {
    navigate(`/RoomEdit/`+ roomId);
    console.log(roomId);
  };

  // Navigate to View Page
  const viewDetails = (roomId) => {
    navigate(`/Roomget/`+roomId);
    console.log(roomId);
  };

  // Delete Room
  const deleteDetails = (roomId) => {
    axios
      .delete(`http://localhost:8008/room/delete?id=${roomId}`)
      .then(() => {
        alert("Successfully deleted");
        setRooms(rooms.filter((room) => room.id !== id)); // Remove room from state
      })
      .catch((err) => {
        console.error("Error deleting room:", err);
      });
  };

  return (
    <div className="container mt-5">
      <Link to="/RoomCr" className="btn btn-success mb-3">Add New Room</Link>

      <h2 className="text-center mb-4">Our Rooms</h2>
      <div className="row">
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <div key={room.id} className="col-md-4">
              <div className="card mb-4 shadow-sm">
                  <img 
  src="https://media.istockphoto.com/id/1050564510/photo/3d-rendering-beautiful-luxury-bedroom-suite-in-hotel-with-tv.jpg?s=612x612&w=0&k=20&c=ZYEso7dgPl889aYddhY2Fj3GOyuwqliHkbbT8pjl_iM="
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
                  

                  <button className="btn btn-info mt-2 w-100" onClick={() => editDetails(room.roomId)}>Edit</button>
                  <button className="btn btn-primary mt-2 w-100" onClick={() => viewDetails(room.roomId)}>View</button>
                  <button className="btn btn-danger mt-2 w-100" onClick={() => deleteDetails(room.roomId)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="text-center text-muted">No rooms available.</h5>
        )}
      </div>
    </div>
  );
}

export default RoomShow;
