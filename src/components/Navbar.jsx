import "./Navbar.css";
import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1>Placement Management System</h1>
      </div>

      <div className="nav-center">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="nav-right">
        <FaBell className="nav-icon" />

        <div className="profile">
          <FaUserCircle className="profile-icon" />
          <span>Welcome, Student</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;