import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/dashboard/Sidebar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import GoalCard from "../components/dashboard/GoalCard";
import ProgressCard from "../components/dashboard/ProgressCard";
import TaskCard from "../components/dashboard/TaskCard";
import RecommendationCard from "../components/dashboard/RecommendationCard";
import "../components/dashboard/Dashboard.css";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsCards from "../components/dashboard/StatsCards";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5001/api/user/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Dashboard User:", res.data.user);

      setUser(res.data.user);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();

    // Dashboard ko har 2 second me latest progress milega
    const interval = setInterval(fetchProfile, 2000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading...
      </h2>
    );
  }

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        <DashboardHeader user={user} />
        <StatsCards />
        <WelcomeCard user={user} />

        <div className="dashboard-grid">
          <GoalCard user={user} />
          <ProgressCard user={user} />
        </div>

        <TaskCard />
        <RecommendationCard />
      </main>
    </div>
  );
}