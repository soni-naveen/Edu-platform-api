const express = require("express");
const database = require("./config/database");
const courseRoutes = require("./routes/courseRouter");
const quizRoutes = require("./routes/quizRouter");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/courses", courseRoutes);
app.use("/api", quizRoutes);

// Database Connection
database.connect();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
