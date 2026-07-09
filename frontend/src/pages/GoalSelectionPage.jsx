

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function GoalSelectionPage() {
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("Beginner");
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        "http://localhost:5001/api/user/goal",
        { goal, level },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Goal saved successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Failed to save goal");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px" }}>
      <h1>Select Your Goal</h1>

      <input
        type="text"
        placeholder="Enter your goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
      />

      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <button onClick={handleSave} style={{ width: "100%", padding: "12px" }}>
        Save Goal
      </button>
    </div>
  );
}