import "./Courses.css";

export default function CourseProgress({ progress }) {
  return (
    <div className="course-progress">
      <div className="progress-header">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
    </div>
  );
}