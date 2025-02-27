import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Roomget = () => {
  const [hotel, setHotel] = useState(null);
  const { roomId } = useParams();

  useEffect(() => {
   
    axios
      .get(`http://localhost:8008/room/id?id=${roomId}`)
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [roomId]);

  return (
    <div className="container">
      <form className="form-container">
        <h1>Room Details</h1>

        
        {hotel ? (
          <div className="class-body">
            <p><strong>Id:</strong> {hotel.roomId}</p>
            <p><strong>Room Number:</strong> {hotel.room_Number}</p>
            <p><strong>Status:</strong> {hotel.status}</p>
            <p><strong>Cost Per Day:</strong> {hotel.cost_Per_Day}</p>
            <p><strong>Room Type:</strong> {hotel.room_Type}</p>
          </div>
        ) : (
          <h2>Loading room details...</h2>
        )}
        <Link to="/" className="back-button">Back</Link>
      </form>
    </div>
  );
};

export default Roomget;
