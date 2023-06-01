const express = require("express");
const router = express.Router();

router.get("/illustration", (req, res, next) => {
  res.json("test illustration");
});

module.exports = router;
