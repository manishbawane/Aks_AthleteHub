import React, { useState } from "react";
import AdminSidebar from "../admin-dashboard/AdminSidebar";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [adminData] = useState({ email: "admin@example.com" });
  const [users] = useState([
    { email: "user1@example.com", role: "User" },
    { email: "trainer1@example.com", role: "Trainer" },
    { email: "user2@example.com", role: "User" },
    { email: "user3@example.com", role: "User" },
    { email: "trainer2@example.com", role: "Trainer" },
    { email: "user4@example.com", role: "User" },
  ]);

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="container">
        <div className="dashboard-card">
          <h2>Welcome, Admin</h2>
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="dashboard-card">
          <h3>Manage Users</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
