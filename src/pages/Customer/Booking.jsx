import axios from "axios";
import React, { useEffect, useState } from "react";

const Bookings= () => {
  const [bookings, setBookings] = useState([]); // Initialize with an empty array

  const handleCancel = (id) => {
    setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8008/booking/listall")
      .then((res) => {
        setBookings(res.data); // Use response data
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err.message);
      });
  }, []);

  console.log(Bookings)

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Your Bookings</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Booked On</th>
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
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <tr key={booking.id}>
                <td>{index + 1}</td>
                <td>{booking.booked_On}</td>
                <td>{booking.user_Id}</td>
                <td>{booking.room_Id}</td>
                <td>{booking.approved_By}</td>
                <td>{booking.from_Date}</td>
                <td>{booking.to_Date}</td>
                <td>{booking.total_Amount}</td>
                <td>{booking.balance_Amount}</td>
                <td>{booking.discount}</td>
                <td>{booking.damage_Cost}</td>
                <td>
                  <span className={`badge ${booking.status === "Approved" ? "bg-success" : "bg-warning text-dark"}`}>
                    {booking.status}
                  </span>
                </td>
                <td>{booking.approved_On}</td>
                <td>{booking.cancellation_Reason}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleCancel(booking.id)}>
                    Cancel
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="15" className="text-center text-muted">
                No bookings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
