import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/AdminSidebar.css";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <div className="admin-sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/admin-dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/manage-users" activeClassName="active">
            Manage Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/manage-trainers" activeClassName="active">
            Manage Trainers
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" activeClassName="active">
            Reports
          </NavLink>
        </li>
      </ul>
      <button className="btn-logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
