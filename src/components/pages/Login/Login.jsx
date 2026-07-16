import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setMessage("Please enter Email and Password");
      return;
    }

    setLoading(true);
    setMessage("");

    setTimeout(() => {
      if (
        email === "admin@gmail.com" &&
        password === "admin123"
      ) {
        localStorage.setItem("isLoggedIn","true");

        navigate("/Dashboard");
      } else {
        setMessage("Invalid Email or Password");
      }

      setLoading(false);
    }, 2000);

    
    
  };

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

      <br />
      <br />

      <p className="message">{message}</p>

      <p>
        Don't have an account?{" "}
        <Link to="/Register">
          Register Here
        </Link>
      </p>
    </div>
  );
}

export default Login;