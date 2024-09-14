import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import "./Login.scss";
import Footer from "../HomePage/Footer";
import { useAuth } from "../auth/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post(
        "https://backend-0j4l.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      // Assuming the response contains a token and user info
      const token = response.data.token;
      const user = response.data.user;

      // Handle successful login
      login(token);

      // Store the user information in localStorage to persist it
    localStorage.setItem("user", JSON.stringify({
      name: user.name,
      lastLogin: user.lastLogin,
    }));

    // Redirect to BankHome
    navigate("/bankHome");
    
  } catch (error) {
      // Handle login failure
      console.error("Login failed:", error);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
      <Navbar className="nav" />
      <div className="login-background">
        <div className="card login-card">
          <h3 className="text-center mb-4">Sign In to Continue</h3>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Username
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
