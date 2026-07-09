require("dotenv").config();

console.log("SERVER:", process.env.MONGO_URI);

const app = require("./app");
const connectDB = require("./config/db");

console.log("CONNECT DB:", require.resolve("./config/db"));

const PORT = process.env.PORT || 5001;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
  }
};

startServer();