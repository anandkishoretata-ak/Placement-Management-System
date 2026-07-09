import "./Sidebar.css";
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
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>PMS</h2>
        <p>Placement Management System</p>
      </div>

      <ul className="menu">
        <li>
          <FaHome className="icon" />
          <span>Dashboard</span>
        </li>

        <li>
          <FaUserGraduate className="icon" />
          <span>Students</span>
        </li>

        <li>
          <FaBuilding className="icon" />
          <span>Companies</span>
        </li>

        <li>
          <FaBriefcase className="icon" />
          <span>Placements</span>
        </li>

        <li>
          <FaChartBar className="icon" />
          <span>Reports</span>
        </li>

        <li>
          <FaCog className="icon" />
          <span>Settings</span>
        </li>

        <li className="logout">
          <FaSignOutAlt className="icon" />
          <span>Logout</span>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;