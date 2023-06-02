const express = require("express");
const router = express.Router();
const Illustration = require("../models/Illustration.model");

router.get("/illustration", async (req, res, next) => {
  let response = await Illustration.find()
  res.json(response);
});

router.get("/illustration/:id", async (req, res, next) => {
  let {id} = req.params
  let response = await Illustration.findById(id)
  res.json(response);
});

router.post("/illustration/", async (req,res, next) => {
  const {author, name, imageUrl, price, date} = req.body;
  await Illustration.create({author, name, imageUrl, price, date} ,{new:true});
  let response = "object created";
  res.json(response);
})

module.exports = router;
