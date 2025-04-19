import React, { useState } from "react";
import './Login.scss';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/loginSlice";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const Login = () => {
  const [ username, setUsername ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ isLoginDisabled, setIsLoginDisabled ] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username && password) {
      setIsLoginDisabled(true);
      const resultAction = await dispatch(loginUser({ username, password }));

      if (loginUser.fulfilled.match(resultAction)) {
        navigate("/bankhome");
      } else {
        setIsLoginDisabled(false);
      }
    }
  };

  const handleForgotPassword = () => {
    if(!isLoginDisabled){
    navigate("/forgetUserPass");
  }
  };

  return (
    <>
      <Nav className="loginNav" />
      <div className="login-background">
        <form onSubmit={handleSubmit} className="LoginContainer">
          <h3 className="tex">Sign In to Continue</h3>

          <div className="LoginInput">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className="LoginInput">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          {error && <p className="errorMessage">{error}</p>}

          {loading ? (
            <div className="loadingBtn">
              <div className="ball-loader"></div>
              <span className="loadingB"> Loading...</span>
            </div>
          ) : (
            <button type="submit" className="Btn">
              Login
            </button>
          )}

          <p className="handleForgotPassword">
            Forgot <span onClick={handleForgotPassword}>Login</span> ID or <span onClick={handleForgotPassword}>Password?</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
