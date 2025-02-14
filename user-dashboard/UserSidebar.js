import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/UserSidebar.css"; // Optional, for styling

const UserSidebar = () => {
  const isUserLoggedIn = localStorage.getItem("userLoggedIn");

  return (
    <div className="user-sidebar">
      <h3>User Dashboard</h3>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/user-dashboard/my-courses"
              className="sidebar-link"
              activeClassName="active"
            >
              My Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-dashboard/payment-history"
              className="sidebar-link"
              activeClassName="active"
            >
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-dashboard/profile"
              className="sidebar-link"
              activeClassName="active"
            >
              Profile
            </NavLink>
          </li>
          {isUserLoggedIn && (
            <li>
              <NavLink
                to="/login"
                className="sidebar-link"
                onClick={() => {
                  localStorage.removeItem("userLoggedIn");
                }}
              >
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default UserSidebar;
