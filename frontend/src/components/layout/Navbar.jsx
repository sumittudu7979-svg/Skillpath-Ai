import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="logo">
        ⚡ SkillPath <span>AI</span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className="nav-actions">

        <NavLink to="/register" className="nav-btn">
          Get Started
        </NavLink>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>


        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

</div>

{/* Overlay */}
{menuOpen && (
  <div
    className="overlay"
    onClick={() => setMenuOpen(false)}
  ></div>
)}

{/* Mobile Menu */}
<div className={menuOpen ? "mobile-menu active" : "mobile-menu"}>

  <button
    className="close-btn"
    onClick={() => setMenuOpen(false)}
  >
    <X size={28} />
  </button>

  <NavLink to="/" onClick={() => setMenuOpen(false)}>
    🏠 Home
  </NavLink>

  <NavLink to="/about" onClick={() => setMenuOpen(false)}>
    👤 About
  </NavLink>

  <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
    ✉️ Contact
  </NavLink>

  <hr />

  <NavLink
    to="/register"
    className="mobile-btn"
    onClick={() => setMenuOpen(false)}
  >
    Get Started
  </NavLink>

  <button
    className="theme-btn mobile-theme"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
  </button>

</div>

    </nav>
  );
}

export default Navbar;