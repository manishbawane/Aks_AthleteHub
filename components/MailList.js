import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap imported

const MailsList = () => {
  const [mails, setMails] = useState([]); // State to hold the fetched mails
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track any errors

  // Fetch mails from the backend
  useEffect(() => {
    axios.get('http://localhost:8086/Api/Mail/api/mails')  // Ensure the correct API URL
      .then(response => {
        console.log("Mails fetched:", response.data); // Debugging line
        setMails(response.data); // Set the mails data to the state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(err => {
        console.error("Error fetching mails:", err); // Debugging line
        setError('Error fetching mails'); // Set error message
        setLoading(false); // Set loading to false even in case of an error
      });
  }, []);

  // Show loading state
  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  // Show error message
  if (error) {
    return <div className="text-center mt-5 text-danger">{error}</div>;
  }

  // Show mails if they are fetched successfully
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Mails From Customer</h2>
      {mails.length > 0 ? (
        <div className="row">
          {mails.map(mail => (
            <div key={mail.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{mail.subject}</h5>
                  <p className="card-text"><strong>Sender:</strong> {mail.name}</p>
                  <p className="card-text"><strong>Recipient:</strong> {mail.email}</p>
                  <p className="card-text"><strong>Message:</strong> {mail.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No mails available</p>
      )}
    </div>
  );
};

export default MailsList;
