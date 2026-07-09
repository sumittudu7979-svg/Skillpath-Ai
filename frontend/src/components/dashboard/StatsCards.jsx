import "./StatsCards.css";
import {
  FiBookOpen,
  FiAward,
  FiClock,
  FiZap,
} from "react-icons/fi";

import { motion } from "framer-motion";

export default function StatsCards() {
  const cards = [
    {
      title: "Courses",
      value: "12",
      icon: <FiBookOpen />,
    },
    {
      title: "Learning Hours",
      value: "26h",
      icon: <FiClock />,
    },
    {
      title: "Certificates",
      value: "2",
      icon: <FiAward />,
    },
    {
      title: "Streak",
      value: "5 Days",
      icon: <FiZap />,
    },
  ];

  return (
    <div className="stats-grid">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="stat-card"
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <div className="stat-icon">
            {card.icon}
          </div>

          <div>
            <h2>{card.value}</h2>
            <p>{card.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}