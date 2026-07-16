import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaBuilding,
  FaBriefcase,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/Login");
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>PMS</h2>
        <p>Placement Management System</p>
      </div>

      <ul className="menu">
        <li>
          <NavLink to="/Dashboard">
            <FaHome className="icon" />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Students">
            <FaUserGraduate className="icon" />
            <span>Students</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Companies">
            <FaBuilding className="icon" />
            <span>Companies</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Placements">
            <FaBriefcase className="icon" />
            <span>Placements</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Reports">
            <FaChartBar className="icon" />
            <span>Reports</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Settings">
            <FaCog className="icon" />
            <span>Settings</span>
          </NavLink>
        </li>

        <li className="logout" onClick={handleLogout}>
          <FaSignOutAlt className="icon" />
          <span>Logout</span>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;