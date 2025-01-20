const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const authRouter = require("./routes/auth");
const authMiddlewareRouters = require("./routes/authMiddlewareRoute");
const path = require("path");
const memberRoutes = require("./routes/memberRoutes");
const SettingsRoute = require("./routes/SettingsRoute");
const statisticsRoutes = require("./routes/statisticsRoutes");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// static files from public directory
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/frontend", express.static(path.join(__dirname, "frontend")));

// Routes

// member handling needers list
app.use("/needers", memberRoutes);
// user settings updates
app.use("/settings", SettingsRoute);

// statistics from the provided Archive schema
app.use("/statistics", statisticsRoutes);

// Default route to test server status
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "/public", "landingPage.html"));
});

// Error handling middleware
app.use((error, request, response, next) => {
  console.error("Error:", error.message);
  response.status(500).json({ error: "Internal Server Error" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
