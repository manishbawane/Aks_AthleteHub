import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterForm.css";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if user already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      alert("User already exists!");
      return;
    }

    // Add the new user to the array with registration status
    const newUser = { name, email, isRegistered: true };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    // Set the user as logged in and navigate to the dashboard
    localStorage.setItem("userLoggedIn", true);
    localStorage.setItem("userEmail", email);
    setIsRegistered(true);
    navigate("/user-dashboard"); // Redirect to the user dashboard
  };

  return (
    <div className="register-form">
      <h2>Register for the Academy</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <button type="submit" className="btn-submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
