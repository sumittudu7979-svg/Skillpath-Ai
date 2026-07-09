import "./DashboardHeader.css";
import {
  FiBell,
  FiSearch,
  FiMoon,
  FiUser,
} from "react-icons/fi";

export default function DashboardHeader({ user }) {
  return (
    <header className="dashboard-header">

      <div className="search-box">
        <FiSearch />
        <input
          type="text"
          placeholder="Search courses..."
        />
      </div>

      <div className="header-right">

        <button className="icon-btn">
          <FiBell />
        </button>

        <button className="icon-btn">
          <FiMoon />
        </button>

        <div className="profile">

          <div className="avatar">
            <FiUser />
          </div>

          <div>
            <h4>{user?.name}</h4>
            <p>Student</p>
          </div>

        </div>

      </div>

    </header>
  );
}