import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";

import "./CourseDetailsPage.css";

export default function CourseDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const lessons = [
    "Introduction",
    "Installation",
    "Basic Commands",
    "File System",
    "Permissions",
    "Users & Groups",
    "Networking",
    "Shell Scripting",
    "Process Management",
    "Final Project",
  ];

  const [currentLesson, setCurrentLesson] = useState(0);

  const progress = Math.round(
    ((currentLesson + 1) / lessons.length) * 100
  );

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <main className="player-page">

        <button
          className="back-btn"
          onClick={() => navigate("/courses")}
        >
          ← Back to Courses
        </button>

        <h1>🎓 Course #{id}</h1>

        <div className="player-layout">

          {/* LEFT */}

          <div className="video-section">

            <div className="video-player">

              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Course Video"
                allowFullScreen
              ></iframe>

            </div>

            <div className="progress-card">

              <h3>Course Progress</h3>

              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width: `${progress}%`,
                  }}
                ></div>

              </div>

              <p>{progress}% Completed</p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="lesson-sidebar">

            <h2>📚 Lessons</h2>

            {lessons.map((lesson, index) => (

              <div
                key={index}
                className={
                  currentLesson === index
                    ? "lesson active"
                    : "lesson"
                }
                onClick={() => setCurrentLesson(index)}
              >
                {index < currentLesson
                  ? "✅"
                  : currentLesson === index
                  ? "▶"
                  : "🔒"}

                {lesson}
              </div>

            ))}

          </div>

        </div>

      </main>

    </div>
  );
}