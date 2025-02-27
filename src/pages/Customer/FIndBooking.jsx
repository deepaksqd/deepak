import { useState } from "react";
import axios from "axios";

const FindBooking = () => {
  const [code, setCode] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const fetchBooking = () => {
    axios
      .get(`http://localhost:8008/booking/id?id=${code}`) // Corrected URL
      .then((res) => setData(res.data))
      .catch(() => setError("Booking Not Found"));
  };
  
  return (
    <div>
      <h2>Find Booking</h2>
      <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter Code" />
      <button onClick={fetchBooking}>Find</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div>
          <p><strong>Code:</strong> {data.confirmationCode}</p>
          <p><strong>Check-in:</strong> {data.from_Date}</p>
          <p><strong>Check-out:</strong> {data.to_Date}</p>
          <p><strong>no of Adults:</strong> {data.adult}</p>
          <p><strong>no of children:</strong> {data.children}</p>

       
        </div>
        
      )}
    </div>
  );
};

export default FindBooking;