import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import Sidebar from "../components/dashboard/Sidebar";
import CourseCard from "../components/courses/CourseCard";

import "../components/courses/Courses.css";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  const images = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  ];

  const loadCourses = async () => {
    try {
      const token = localStorage.getItem("token");

      // Get User Profile
      const profile = await axios.get(
        "http://localhost:5001/api/user/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const goal = profile.data.user.goal;

      // Get Courses
      const res = await axios.get(
        `http://localhost:5001/api/courses?goal=${encodeURIComponent(goal)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const difficulties = [
        "Beginner",
        "Intermediate",
        "Advanced",
      ];

      const data = res.data.courses.map((course, index) => ({
        ...course,
        image: images[index % images.length],
        lessons: Math.floor(Math.random() * 20) + 8,
        rating: (4 + Math.random()).toFixed(1),
        progress: Math.floor(Math.random() * 100),
        difficulty:
          difficulties[index % difficulties.length],
      }));

      setCourses(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchFilter =
        filter === "All" ||
        course.difficulty === filter;

      return matchSearch && matchFilter;
    });
  }, [courses, search, filter]);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">

        <div className="courses-header">
          <div>
            <h1>📚 My Courses</h1>
            <p>Continue your learning journey.</p>
          </div>

          <input
            type="text"
            placeholder="🔍 Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="course-search"
          />
        </div>

        <div className="filter-bar">
          {[
            "All",
            "Beginner",
            "Intermediate",
            "Advanced",
          ].map((level) => (
            <button
              key={level}
              className={`filter-btn ${
                filter === level
                  ? "active-filter"
                  : ""
              }`}
              onClick={() => setFilter(level)}
            >
              {level}
            </button>
          ))}
        </div>

        {loading ? (
          <h2>Loading Courses...</h2>
        ) : (
          <div className="courses-grid">
            {filteredCourses.length === 0 ? (
              <h2>No Courses Found</h2>
            ) : (
              filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))
            )}
          </div>
        )}

      </main>
    </div>
  );
}