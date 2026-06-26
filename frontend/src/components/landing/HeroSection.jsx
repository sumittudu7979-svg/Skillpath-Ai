import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-tag">
          🚀 AI Powered Learning Platform
        </span>

        <h1>
          Learn Smarter <br />
          with <span>AI-Powered</span> <br />
          Roadmaps
        </h1>

        <p>
          Get a personalized learning roadmap built by AI.
          Learn with an AI mentor, practice real projects,
          and track your progress step by step.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Start Learning Free
          </button>

          <button className="btn-secondary">
            Learn More
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h2>10K+</h2>
            <p>Students</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Roadmaps</p>
          </div>

          <div>
            <h2>98%</h2>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="roadmap-card">
          <div className="dots">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <h3>✨ AI Roadmap Generated</h3>

          <ul>
            <li>✅ HTML & CSS Basics</li>
            <li>✅ JavaScript Core</li>
            <li>🔵 React Fundamentals</li>
            <li>⚪ Node.js & Express</li>
            <li>⚪ MongoDB & Deployment</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;