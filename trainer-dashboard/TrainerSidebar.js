import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/TrainerSidebar.css"; // Ensure you have styles for active links

const TrainerSidebar = () => {
  return (
    <div className="trainer-sidebar">
      <h3>Trainer Dashboard</h3>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/trainer-dashboard/schedule"
              className="sidebar-link"
              activeClassName="active"
            >
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trainer-dashboard/manage-students"
              className="sidebar-link"
              activeClassName="active"
            >
              Manage Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trainer-dashboard/profile"
              className="sidebar-link"
              activeClassName="active"
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TrainerSidebar;
