import "./Login.css";
import { useState } from "react";

import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import Dashboard from "../../Dashboard/Dashboard";
import Footer from "../../Footer/Footer";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Login Function
  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      setMessage("Please enter Email and Password");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (
        email === "admin@gmail.com" &&
        password === "admin123"
      ) {
        setIsLoggedIn(true);
        setMessage("");
      } else {
        setMessage("Invalid Email or Password");
      }

      setLoading(false);
    }, 2000);
  };

  // Logout Function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setMessage("");
  };

  // Dashboard Page
  if (isLoggedIn) {
    return (
      <>
        <Navbar />

        <div className="body">
          <Sidebar />

          <div className="main-content">
            <Dashboard />

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  // Login Page
  return (
    <div className="login">
      <h1>Placement Management System</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button
        className="show-btn"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>

      <br />
      <br />

      {loading ? (
        <button disabled>Loading...</button>
      ) : (
        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>
      )}

      <p className="message">{message}</p>
    </div>
  );
}

export default Login;