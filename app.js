require("dotenv").config();
require("./db");

const express = require("express");

const app = express();

// Basic App setup
require("./config")(app);

// Endpoint Setup
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

// Error Handling
require("./error-handling")(app);

module.exports = app;
