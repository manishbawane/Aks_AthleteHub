import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Always login successfully and set role
    let userRole = "User"; // Default role

    if (email.toLowerCase().includes("admin")) {
      userRole = "Admin";
      navigate("/admin-dashboard");
    } else if (email.toLowerCase().includes("trainer")) {
      userRole = "Trainer";
      navigate("/trainer-dashboard");
    } else {
      navigate("/user-dashboard");
    }

    sessionStorage.setItem("userRole", userRole);
  };

  const handleCreateAccount = () => {
    navigate("/signup");
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <div className="create-account">
          <p>
            Don't have an account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={handleCreateAccount}
            >
              Create one
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
