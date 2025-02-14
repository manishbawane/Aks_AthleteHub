import React, { useState, useEffect } from "react";
// import "../styles/ManageUsers.css";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    const adminEmail = localStorage.getItem("adminEmail");
    // if (!adminEmail) {
    //   window.location.href = "/login"; // Redirect if not logged in as admin
    // }
    
    // Retrieve the users list from localStorage or set an empty array if not present
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleUpdateStatus = (userIndex, newStatus) => {
    const updatedUsers = [...users];
    updatedUsers[userIndex].status = newStatus;
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // Save updated users to localStorage
    setMessage("User status updated successfully!");
  };

  const handleDeleteUser = (userIndex) => {
    const updatedUsers = users.filter((_, index) => index !== userIndex);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // Save updated users to localStorage
    setMessage("User deleted successfully!");
  };

  return (
    <div className="manage-users">
      <div className="container">
        <h2>Manage Users</h2>
        {message && <p className="message">{message}</p>}

        <table className="users-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4">No users found.</td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <select
                      value={user.status}
                      onChange={(e) => handleUpdateStatus(index, e.target.value)}
                    >
                      <option value="Active">Active</option>
                      <option value="Suspended">Suspended</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => handleDeleteUser(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
