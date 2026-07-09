import "./Courses.css";

export default function CourseCard({ course }) {
  return (
    <div className="course-card">

      <div className="course-image-wrapper">
        <img
          src={course.image}
          alt={course.title}
          className="course-image"
        />

        <span className="difficulty-badge">
          {course.difficulty}
        </span>

        <button className="wishlist-btn">
          🤍
        </button>
      </div>

      <div className="course-content">

        <h2>{course.title}</h2>

        <p>{course.description}</p>

        <div className="rating-row">
          ⭐ {course.rating}
        </div>

        <div className="course-info">
          <span>⏱ {course.duration}</span>

          <span>📚 {course.lessons} Lessons</span>
        </div>

        <div className="progress-section">

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{
                width: `${course.progress}%`,
              }}
            ></div>

          </div>

          <p>{course.progress}% Completed</p>

        </div>

        <button className="start-btn">
          ▶ Continue Learning
        </button>

      </div>

    </div>
  );
}