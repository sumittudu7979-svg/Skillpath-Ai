import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>⚡ SkillPath AI</h2>
          <p>
            Learn smarter with AI-powered roadmaps and real-world projects.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📧 support@skillpath.ai</p>
          <p>📞 +91 67765 30650</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 SkillPath AI | All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;