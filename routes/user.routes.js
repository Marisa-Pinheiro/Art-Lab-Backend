const express = require("express");
const router = express.Router();

const User = require("../models/User.model");

const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/user-profile/:id", async (req, res) => {
  try {
    const {id} = req.params
    let response = await User.findById(id);
    delete response.password;
    res.json(response);
  } catch {
    console.log(error)
  }
});

router.put("/user-profile/:id", async (req, res) => {
  try {
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
  } catch {
    console.log(error)
  }
});

router.delete("/user-profile/:id", async (req,res) => {

  const {id} = req.params

  try {
    await User.findByIdAndDelete(id)
    response = "User deleted"
    res.json(response);
  } catch {
    console.log(error)
  }
})

//get favourites
router.get("/favourites/:userid", async (req, res) => {
  try {
    const {userid} = req.params
    const userDB = await User.findById(userid);
    await userDB.populate("favourites");
    let response = userDB.favourites
    res.json(response);
  } catch {
    console.log(error)
  }
});

//add to favourites
router.put("/:userid/favourites-add/:illustrationid", async (req,res) => {
  try {
    const {userid, illustrationid} = req.params;

    const userDB = await User.findById(userid);
    
    let favouritesArray = userDB.favourites.map((item) => item)

    favouritesArray.push(illustrationid)

    await User.findByIdAndUpdate(userDB, {favourites: favouritesArray})

    res.json("user favourites updated")

  } catch (error) {
    console.log(error)
  }
})

//remove from favorites
router.put("/:userid/favourites-del/:illustrationid", async (req,res) => {
  try {
    const {userid, illustrationid} = req.params;
    const userDB = await User.findById(userid);

    let favouritesArray = [];
    
    userDB.favourites.forEach((item) => {
      if(!item._id === illustrationid){
        favouritesArray.push(item)
      }
    })

    await User.findByIdAndUpdate(userDB, {favourites: favouritesArray})
    
    res.json("user favourites updated");

  } catch (error) {
    console.log(error)
  }
})

module.exports = router;