const express = require("express");
const router = express.Router();

const User = require("../models/User.model");

const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/user-profile/:id", async (req, res, next) => {
  const {id} = req.params
  let response = await User.findById(id);
  res.json(response);
});

router.put("/user-profile/:id", async (req, res, next) => {
  const {id} = req.params
  const {username, password} = req.body
  
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    res.status(400).json({
      message:
      "Password must have at least 6 characters, contain one number, one lowercase and one uppercase letter.",
    });
    return;
  }
  
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);

  await User.findByIdAndUpdate(id,{username, password:hashedPassword},{new:true});

  let response = "User updated"
  res.json(response);
});

module.exports = router;