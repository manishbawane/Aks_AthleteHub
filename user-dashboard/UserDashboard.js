import React, { useState } from "react";
import UserSidebar from "../user-dashboard/UserSidebar";
import { useNavigate } from "react-router-dom";
import "../styles/UserDashboard.css";

const UserDashboard = () => {
  const [userData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    favoriteSports: [
      { id: 1, name: "Soccer", team: "FC Barcelona", level: "Professional" },
      {
        id: 2,
        name: "Basketball",
        team: "Los Angeles Lakers",
        level: "Professional",
      },
      {
        id: 3,
        name: "Tennis",
        favoritePlayer: "Roger Federer",
        level: "Amateur",
      },
    ],
    paymentHistory: [
      { date: "2024-01-10", amount: "$50", status: "Completed" },
      { date: "2024-02-15", amount: "$75", status: "Pending" },
    ],
    courses: [
      { name: "Football Strategy", duration: "6 weeks" },
      { name: "Basketball Fundamentals", duration: "4 weeks" },
    ],
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <div className="user-dashboard">
      <UserSidebar />
      <div className="container">
        {/* Profile Section */}
        <div className="dashboard-card">
          <h2>Welcome, {userData.name}</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>Email</td>
                <td>{userData.email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{userData.phone}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Favorite Sports Section */}
        <div className="dashboard-card">
          <h3>Your Favorite Sports</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Sport</th>
                <th>Team/Player</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {userData.favoriteSports.map((sport) => (
                <tr key={sport.id}>
                  <td>{sport.name}</td>
                  <td>{sport.team || sport.favoritePlayer}</td>
                  <td>{sport.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment History Section */}
        <div className="dashboard-card">
          <h3>Payment History</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {userData.paymentHistory.map((payment, index) => (
                <tr key={index}>
                  <td>{payment.date}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* My Courses Section */}
        <div className="dashboard-card">
          <h3>My Courses</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {userData.courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.name}</td>
                  <td>{course.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Logout Button */}
        <button className="btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
