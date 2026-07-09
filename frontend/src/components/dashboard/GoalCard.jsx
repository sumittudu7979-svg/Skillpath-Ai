export default function GoalCard({ user }) {
  return (
    <div className="goal-card">
      <h2>🎯 Current Goal</h2>

      <h3>{user?.goal}</h3>

      <p>Level : {user?.level}</p>
    </div>
  );
}