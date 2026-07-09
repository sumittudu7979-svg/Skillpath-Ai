import "./Courses.css";

export default function CourseCard({ course }) {
  return (
    <div className="course-card">

      <div className="course-content">

        <span className="difficulty">
          {course.difficulty}
        </span>

        <h2>{course.title}</h2>

        <p>{course.description}</p>

        <div className="course-info">
          <span>⏱ {course.duration}</span>
          <span>📚 {course.lessons} Lessons</span>
        </div>

        <button
          className="start-btn"
          onClick={() => alert(`Starting ${course.title}`)}
        >
          ▶ Start Learning
        </button>

      </div>

    </div>
  );
}