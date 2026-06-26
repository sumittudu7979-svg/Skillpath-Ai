import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "120px", color: "#6366f1" }}>
        404
      </h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry! The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        style={{
          marginTop: "25px",
          padding: "15px 35px",
          background: "#6366f1",
          color: "#fff",
          borderRadius: "10px",
          textDecoration: "none",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage;