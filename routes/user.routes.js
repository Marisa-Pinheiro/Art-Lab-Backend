const express = require("express");
const router = express.Router();

router.get("/user", (req, res, next) => {
  res.json("test user");
});

module.exports = router;