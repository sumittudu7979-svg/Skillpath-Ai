import Footer from "../components/layout/Footer";
import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <section className="about">

        <div className="about-container">

          <h1>About SkillPath AI</h1>

          <p>
            SkillPath AI is an AI-powered learning platform that helps students
            and developers build personalized learning roadmaps, practice with
            real-world projects, and achieve their career goals faster.
          </p>

          <div className="about-grid">

            <div className="about-card">
              <h3>🎯 Our Mission</h3>
              <p>
                Make quality education accessible through AI-powered guidance.
              </p>
            </div>

            <div className="about-card">
              <h3>🚀 Our Vision</h3>
              <p>
                Help millions of learners become industry-ready developers.
              </p>
            </div>

            <div className="about-card">
              <h3>💡 Why Choose Us?</h3>
              <p>
                Personalized roadmaps, AI mentor, projects, and progress
                tracking in one platform.
              </p>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;