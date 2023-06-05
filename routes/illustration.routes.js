const express = require("express");
const router = express.Router();
const Illustration = require("../models/Illustration.model");
const imgUploader = require('../config/cloudinary.config');

router.get("/illustration", async (req, res) => {
  try {
    let response = await Illustration.find()
    res.json(response);
  } catch {
    console.log(error)
  }
});

router.get("/illustration/:id", async (req, res) => {
  try {
    let {id} = req.params
    let response = await Illustration.findById(id)
    res.json(response);
  } catch {
    console.log(error)
  }
});

router.post("/illustration/", async (req,res) => {
  try {
    const {author, name, price, date, imageUrl} = req.body;
    await Illustration.create({author, name, imageUrl: req.file.path, price, date} ,{new:true});
    let response = "object created";
    res.json(response);
  } catch (error) {
    console.log(error, req.body)
  }
})

router.delete("/illustration/:id", async (req,res) => {

  const {id} = req.params

  try {
    await Illustration.findByIdAndDelete(id)
    response = "Artwork deleted"
    res.json(response);
  } catch (error) {
    console.log(error, req.body)
  }
})

router.post("/illustration/upload", imgUploader.single("imageUrl"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  res.json({ fileUrl: req.file.path });
});


module.exports = router;
