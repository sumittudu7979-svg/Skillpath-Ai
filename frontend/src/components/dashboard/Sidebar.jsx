import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">⚡ SkillPath AI</div>

      <nav>
        <NavLink to="/dashboard">
          🏠 Dashboard
        </NavLink>

        <NavLink to="/roadmap">
          🗺️ Roadmap
        </NavLink>

        <NavLink to="/courses">
          📚 Courses
        </NavLink>

        <NavLink to="/mentor">
          🤖 AI Mentor
        </NavLink>

        <NavLink to="/progress">
          📈 Progress
        </NavLink>

        <NavLink to="/settings">
          ⚙️ Settings
        </NavLink>

        <NavLink to="/login" className="logout">
          🚪 Logout
        </NavLink>
      </nav>
    </aside>
  );
}