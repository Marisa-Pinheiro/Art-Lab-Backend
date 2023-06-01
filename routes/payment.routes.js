const express = require("express");
const router = express.Router();

router.get("/payment", (req, res, next) => {
  res.json("test payment");
});

module.exports = router;