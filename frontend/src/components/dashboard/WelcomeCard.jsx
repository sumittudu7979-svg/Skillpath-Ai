export default function WelcomeCard({ user }) {
  return (
    <div className="welcome-card">
      <h1>👋 Welcome, {user?.name}</h1>

      <p>
        Ready to continue your journey in{" "}
        <strong>{user?.goal}</strong>?
      </p>
    </div>
  );
}