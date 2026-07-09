import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

export default function ProgressCard({ user }) {
  const progress = Number(user?.progress) || 0;

  return (
    <div className="progress-card">
      <h2>📈 Progress</h2>

      <div
        style={{
          width: "140px",
          margin: "25px auto",
        }}
      >
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            pathColor: "#4f46e5",
            textColor: "#111827",
            trailColor: "#e5e7eb",
            textSize: "16px",
          })}
        />
      </div>

      <p
        style={{
          textAlign: "center",
          color: "#666",
        }}
      >
        {progress}% Completed 🚀
      </p>
    </div>
  );
}