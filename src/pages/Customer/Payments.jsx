import React, { useState } from "react";
import axios from "axios";

const Payments = ({ onPaymentSuccess }) => {
  const [customerId, setCustomerId] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Credit Card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  // Handle payment submission
  const handlePayment = (e) => {
    e.preventDefault();

    if (!customerId || !bookingId || !amount || isNaN(amount) || amount <= 0) {
      alert("Please fill in all fields with valid data!");
      return;
    }

    setIsProcessing(true);

    const newPayment = {
      paymentId: `PAY${Date.now()}`, // Unique Payment ID
      customerId,
      bookingId,
      amount: parseFloat(amount),
      method,
      date: new Date().toISOString().split("T")[0], // YYYY-MM-DD
      status: "Success",
    };

    // Simulate API call (Replace with actual backend API)
    axios.post(`http://localhost:8008/PaymentController/create`, newPayment)
      .then(() => {
        setIsProcessing(false);
        setMessage("Payment successful!");
        setCustomerId("");
        setBookingId("");
        setAmount("");
        onPaymentSuccess(newPayment);
      })
      .catch((err) => {
        console.error("Payment failed:", err.message);
        setIsProcessing(false);
        setMessage("Payment failed. Try again.");
      });
  };

  return (
    <div className="card p-4 mb-4">
      <h4>Make a Payment</h4>
      {message && <div className={`alert ${message.includes("failed") ? "alert-danger" : "alert-success"}`}>{message}</div>}

      <form onSubmit={handlePayment}>
        <div className="mb-3">
          <label className="form-label">Customer ID</label>
          <input
            type="text"
            className="form-control"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Booking ID</label>
          <input
            type="text"
            className="form-control"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Amount ($)</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <select className="form-select" value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="UPI">UPI</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary" disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default Payments;
