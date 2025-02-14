import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/admin-dashboard">Admin</Link></li>
          <li><Link to="/user-dashboard">User</Link></li>
          <li><Link to="/trainer-dashboard">Trainer</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
