import "./FeatureCard.css";

const features = [
  {
    icon: "🤖",
    title: "AI Mentor",
    description: "Get instant guidance from your AI mentor anytime."
  },
  {
    icon: "🗺️",
    title: "AI Roadmaps",
    description: "Personalized learning paths based on your goals."
  },
  {
    icon: "💻",
    title: "Real Projects",
    description: "Build practical projects to strengthen your portfolio."
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    description: "Track every milestone and stay motivated."
  }
];

function FeatureCard() {
  return (
    <section className="features">

      <h2>Why Choose SkillPath AI?</h2>

      <div className="feature-grid">

        {features.map((item, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FeatureCard;