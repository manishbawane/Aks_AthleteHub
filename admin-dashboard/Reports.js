import React, { useState, useEffect } from "react";
import "../styles/ReportPage.css";

const ReportPage = () => {
  const [trainerReports, setTrainerReports] = useState([]);
  const [userReports, setUserReports] = useState([]);
  
  useEffect(() => {
    const storedTrainerReports = JSON.parse(localStorage.getItem("trainerReports")) || [];
    const storedUserReports = JSON.parse(localStorage.getItem("userReports")) || [];

    setTrainerReports(storedTrainerReports);
    setUserReports(storedUserReports);
  }, []);

  return (
    <div className="report-page">
      <div className="container">
        <h2>All Reports</h2>
        
        {/* Trainer Reports Section */}
        <div className="report-section">
          <h3>Trainer Reports</h3>
          {trainerReports.length === 0 ? (
            <p>No trainer reports found.</p>
          ) : (
            <table className="reports-table">
              <thead>
                <tr>
                  <th>Trainer Name</th>
                  <th>Report Date</th>
                  <th>Status</th>
                  <th>Report Content</th>
                </tr>
              </thead>
              <tbody>
                {trainerReports.map((report, index) => (
                  <tr key={index}>
                    <td>{report.trainerName}</td>
                    <td>{report.reportDate}</td>
                    <td>{report.status}</td>
                    <td>{report.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        
        {/* User Reports Section */}
        <div className="report-section">
          <h3>User Reports</h3>
          {userReports.length === 0 ? (
            <p>No user reports found.</p>
          ) : (
            <table className="reports-table">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Report Date</th>
                  <th>Status</th>
                  <th>Report Content</th>
                </tr>
              </thead>
              <tbody>
                {userReports.map((report, index) => (
                  <tr key={index}>
                    <td>{report.userName}</td>
                    <td>{report.reportDate}</td>
                    <td>{report.status}</td>
                    <td>{report.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
