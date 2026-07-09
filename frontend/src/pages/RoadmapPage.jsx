import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/dashboard/Sidebar";
import "./RoadmapPage.css";

export default function RoadmapPage() {
  const [user, setUser] = useState(null);
  const [roadmap, setRoadmap] = useState([]);
  const [completedTopics, setCompletedTopics] = useState([]);

  useEffect(() => {
    fetchRoadmap();
  }, []);

  const fetchRoadmap = async () => {
    console.log("🚀 fetchRoadmap called");

    try {
      const token = localStorage.getItem("token");

      console.log("🔑 Token:", token);

      // ================= USER PROFILE =================

      const profileRes = await axios.get(
        "http://localhost:5001/api/user/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("👤 Profile Response:", profileRes.data);

      const userData = profileRes.data.user;

      console.log("👤 User:", userData);
      console.log("📊 Progress:", userData.progress);
      console.log("✅ Completed Topics:", userData.completedTopics);
      console.log("🎯 Goal:", userData.goal);

      setUser(userData);
      setCompletedTopics(userData.completedTopics || []);

      // ================= ROADMAP =================

      const roadmapRes = await axios.get(
        `http://localhost:5001/api/roadmap?goal=${encodeURIComponent(
          userData.goal
        )}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("🗺 Roadmap Response:", roadmapRes.data);

      setRoadmap(roadmapRes.data.roadmap || []);
    } catch (err) {
      console.error("❌ Roadmap Error:", err);
    }
  };

  const handleCheck = async (topic) => {
    console.log("🔥 handleCheck called");
    console.log("📚 Topic:", topic);

    try {
      let updatedTopics = [];

      if (completedTopics.includes(topic)) {
        updatedTopics = completedTopics.filter((t) => t !== topic);
      } else {
        updatedTopics = [...completedTopics, topic];
      }

      console.log("✅ Updated Topics:", updatedTopics);

      setCompletedTopics(updatedTopics);

      const token = localStorage.getItem("token");

      console.log("🚀 Sending PUT request...");

      const res = await axios.put(
        "http://localhost:5001/api/user/progress",
        {
          completedTopics: updatedTopics,
          totalTopics: roadmap.length,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("✅ PUT Response:", res.data);

      // Latest Profile

      const profile = await axios.get(
        "http://localhost:5001/api/user/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("👤 Latest User:", profile.data.user);
      console.log("📊 Latest Progress:", profile.data.user.progress);
      console.log(
        "✅ Latest Completed:",
        profile.data.user.completedTopics
      );

      // Dashboard ke liye state update

      setUser(profile.data.user);
      setCompletedTopics(profile.data.user.completedTopics);
    } catch (err) {
      console.error(
        "❌ Progress Error:",
        err.response?.data || err.message
      );
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        <div className="roadmap-card">
          <h1>🗺 {user?.goal || "Learning"} Roadmap</h1>

          <p>Complete each topic one by one.</p>

          <div className="roadmap-list">
            {roadmap.length === 0 ? (
              <h3>No Roadmap Available</h3>
            ) : (
              roadmap.map((topic, index) => (
                <div className="roadmap-item" key={index}>
                  <input
                    type="checkbox"
                    checked={completedTopics.includes(topic)}
                    onChange={() => handleCheck(topic)}
                  />

                  <span>{topic}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}