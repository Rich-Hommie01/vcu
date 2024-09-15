import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../HomePage/Navbar";
import "./Login.scss";
import Footer from "../HomePage/Footer";
import { useAuth } from "../auth/AuthProvider";
import { Spinner } from 'react-bootstrap';  // Import Spinner from Bootstrap

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://backend-grdx.onrender.com/api/auth/login",
        { username, password }
      );

      if (response.data.success) {
        const token = response.data.token;
        const user = response.data.user;
        login(token);
        localStorage.setItem("user", JSON.stringify({
          name: user.name,
          lastLogin: user.lastLogin,
        }));
        navigate("/bankHome");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
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
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={loading} // Disable input while loading
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
                disabled={loading} // Disable input while loading
              />
            </div>

            {error && <p className="error">{error}</p>}

            {loading ? (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
