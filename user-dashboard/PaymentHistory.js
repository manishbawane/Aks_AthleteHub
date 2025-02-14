import React, { useState, useEffect } from "react";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch user's payment history from localStorage or API
    const storedPayments = JSON.parse(localStorage.getItem("userPayments")) || [];
    setPayments(storedPayments);
  }, []);

  return (
    <div className="dashboard-section">
      <h3>Payment History</h3>
      {payments.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={index}>
                <td>{payment.date}</td>
                <td>{payment.amount}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No payment history available.</p>
      )}
    </div>
  );
};

export default PaymentHistory;
