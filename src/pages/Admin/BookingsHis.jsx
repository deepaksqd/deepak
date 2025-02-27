import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingsHis = () => {
  const [bookings, setBookings] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  
  useEffect(() => {
    axios
      .get("http://localhost:8008/booking/listall") 
      .then((response) => {
        setBookings(response.data); 
        setLoading(false); 
      })
      .catch((err) => {
        setError("Error fetching booking history");
        setLoading(false); 
      });
  }, []); 


  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Booking History</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>roll no</th>
            <th>User ID</th>
            <th>Room ID</th>
            <th>Approved By</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Total Amount</th>
            <th>Balance Amount</th>
            <th>Discount</th>
            <th>Damage Cost</th>
            <th>Status</th>
            <th>Approved On</th>
            <th>Cancellation Reason</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <tr key={index}>
                <td>{index +1}</td>
                <td>{booking.user_Id}</td>
                <td>{booking.room_Id}</td>
                <td>{booking.approved_By}</td>
                <td>{booking.from_Date}</td>
                <td>{booking.to_Date}</td>
                <td>${booking.total_Amount}</td>
                <td>${booking.balance_Amount}</td>
                <td>${booking.discount}</td>
                <td>${booking.damage_Cost}</td>
                <td>
                  <span
                    className={
                      booking.status === "Approved"
                        ? "badge bg-success"
                        : booking.status === "Pending"
                        ? "badge bg-warning text-dark"
                        : "badge bg-danger"
                    }
                  >
                    {booking.status}
                  </span>
                </td>
                <td>{booking.approved_On}</td>
                <td>{booking.cancellation_Reason || "N/A"}</td>
                <td>{booking.remarks}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="13" className="text-center text-muted">
                No booking history found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsHis;
