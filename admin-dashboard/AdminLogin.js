import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "", role: "admin" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch stored credentials for all roles
    const storedAdmin = JSON.parse(localStorage.getItem("adminCredentials"));
    const storedUser = JSON.parse(localStorage.getItem("userCredentials"));
    const storedTrainer = JSON.parse(localStorage.getItem("trainerCredentials"));

    let role = formData.role;
    let isAuthenticated = false;

    if (isSignup) {
      if (formData.username && formData.password) {
        if (role === "admin") localStorage.setItem("adminCredentials", JSON.stringify(formData));
        if (role === "user") localStorage.setItem("userCredentials", JSON.stringify(formData));
        if (role === "trainer") localStorage.setItem("trainerCredentials", JSON.stringify(formData));

        alert(`${role.charAt(0).toUpperCase() + role.slice(1)} account created successfully! Please log in.`);
        setIsSignup(false);
        setFormData({ username: "", password: "", role: "admin" });
      } else {
        setError("All fields are required!");
      }
    } else {
      if (storedAdmin && formData.username === storedAdmin.username && formData.password === storedAdmin.password) {
        role = "admin";
        isAuthenticated = true;
      } else if (storedUser && formData.username === storedUser.username && formData.password === storedUser.password) {
        role = "user";
        isAuthenticated = true;
      } else if (storedTrainer && formData.username === storedTrainer.username && formData.password === storedTrainer.password) {
        role = "trainer";
        isAuthenticated = true;
      } else {
        setError("Invalid credentials. Please try again or create an account.");
        return;
      }

      // Store authentication status and role correctly
      sessionStorage.setItem("isAuthenticated", "true");
      sessionStorage.setItem("userRole", role);

      // Navigate to the correct dashboard
      navigate(`/${role}-dashboard`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isSignup ? "Create Account" : "Login"}</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="trainer">Trainer</option>
          </select>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isSignup ? "Create Account" : "Login"}</button>
        </form>
        <p className="toggle-text">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button className="toggle-button" onClick={() => { setIsSignup(!isSignup); setError(""); }}>
            {isSignup ? "Login Here" : "Create Account"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
