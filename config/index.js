const express = require("express");

const logger = require("morgan");
const cookieParser = require("cookie-parser");

// Handling requests from Cross origin resource sharing
const cors = require("cors");

// Middleware configuration
module.exports = (app) => {
  app.set("trust proxy", 1);

  // controls a very specific header to pass headers from the frontend
  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
    })
  );

  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
