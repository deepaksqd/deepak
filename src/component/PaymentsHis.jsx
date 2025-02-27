import React, { useState, useEffect } from "react";
import axios from "axios";




const PaymentsHis = () => {
  const [payments, setPayments] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch payments from API
  useEffect(() => {
    axios
      .get("http://localhost:8008/PaymentController/listall") // Replace with actual API URL
      .then((response) => {
        setPayments(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching payments:", err);
        setError("Failed to load payments.");
        setLoading(false);
      });
  }, []);

  // Handle new payment addition
  const handlePaymentSuccess = (newPayment) => {
    setPayments([...payments, newPayment]); // Add new payment to state
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Hotel Payment System</h2>
      
      {/* Payment Form */}
      {/* <PaymentsForm onPaymentSuccess={handlePaymentSuccess} /> */}
      


      {/* Loading or Error Handling */}
      {loading && <p className="text-center">Loading payment history...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* Payment History */}
      {!loading && !error && (
        <>
          <h4 className="mt-4">Payment History</h4>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Roll no</th>
                <th>Payment ID</th>
                <th>Customer ID</th>
                <th>Booking ID</th>
                <th>Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.length > 0 ? (
                payments.map((payment, index) => (
                  <tr key={payment.paymentId}>
                    <td>{index + 1}</td>
                    <td>{payment.id}</td>
                    <td>{payment.customer_Id}</td>
                    <td>{payment.booking_Id}</td>
                    <td>{payment.payment_Method}</td>
                    <td>{payment.status}</td>
                    
                    
                   
                    <td>
                      <span
                        className={`badge ${
                          payment.status === "Success"
                            ? "bg-success"
                            : payment.status === "Pending"
                            ? "bg-warning text-dark"
                            : "bg-danger"
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center text-muted">
                    No payments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default PaymentsHis;
