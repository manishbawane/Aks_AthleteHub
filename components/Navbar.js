import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
    // Fetch role from sessionStorage
    const storedRole = sessionStorage.getItem("userRole");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  // Handle role selection and authentication check
  const handleRoleSelect = (selectedRole) => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");

    if (isAuthenticated === "true" && role === selectedRole) {
      navigate(`/${selectedRole}-dashboard`);
    } else {
      // alert("Please log in first.");
      navigate("/login");
    }
  };

  return (
    <div className="navbar-container">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo Section */}
          <div className="col-md-4 col-12">
            <div className="navbar-logo">
              <h2>Sports Academy</h2>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-md-6 col-12">
            <ul className="navbar-links d-flex justify-content-between">
              <li>
                <NavLink to="/" className="nav-item">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-item">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="nav-item">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="nav-item">
                  Pricing
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/mailList" className="nav-item">
                  MailList
                </NavLink>
              </li> */}
            </ul>
          </div>

          {/* Dropdown for Dashboard Access */}
          <div className="col-md-2 col-12 d-flex justify-content-md-end justify-content-center">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {role ? `Dashboard (${role})` : "Login"}
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item" type="button" onClick={() => handleRoleSelect("admin")}>
                  Admin Dashboard
                </button>
                <button className="dropdown-item" type="button" onClick={() => handleRoleSelect("user")}>
                  User Dashboard
                </button>
                <button className="dropdown-item" type="button" onClick={() => handleRoleSelect("trainer")}>
                  Trainer Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
