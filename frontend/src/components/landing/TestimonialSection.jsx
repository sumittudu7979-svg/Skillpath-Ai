import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Computer Science Student",
    review:
      "The AI mentor helped me learn React much faster. The roadmap was very clear and easy to follow.",
    image: "👨‍🎓",
  },
  {
    name: "Priya Mehta",
    role: "Frontend Developer",
    review:
      "The project recommendations improved my portfolio and boosted my confidence.",
    image: "👩‍💻",
  },
  {
    name: "David Kumar",
    role: "Software Engineer",
    review:
      "SkillPath AI is one of the best learning platforms I have used.",
    image: "👨‍💼",
  },
];

function TestimonialSection() {
  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="avatar">{item.image}</div>

            <p className="review">"{item.review}"</p>

            <h3>{item.name}</h3>

            <span>{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialSection;