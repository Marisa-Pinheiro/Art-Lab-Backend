const express = require("express");
const router = express.Router();
const Illustration = require("../models/Illustration.model");
const imgUploader = require('../config/cloudinary.config');

router.get("/illustration", async (req, res, next) => {
  let response = await Illustration.find()
  res.json(response);
});

router.get("/illustration/:id", async (req, res, next) => {
  let {id} = req.params
  let response = await Illustration.findById(id)
  res.json(response);
});

router.post("/illustration/", imgUploader.single('illustration-image'), async (req,res, next) => {
  const {author, name, price, date} = req.body;
  await Illustration.create({author, name, imageUrl: req.file.path, price, date} ,{new:true});
  let response = "object created";
  res.json(response);
})

module.exports = router;
