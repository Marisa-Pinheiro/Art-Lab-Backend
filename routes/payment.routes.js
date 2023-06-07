const express = require("express");
const router = express.Router();
const ShoppingCart = require("../models/shoppinCart.model");

router.get("/:userid/cart", async (req, res) => {
  try {
    const {userid} = req.params;

    const cart = await ShoppingCart.findOne({owner: userid})
    res.json(cart);
  } catch (err) {
    console.log(err)
  }
});

router.post("/:userid/cart/:illustrationid", async (req, res) => {
  try {
    const {userid, illustrationid} = req.params;

    const cart = await ShoppingCart.findOne({owner: userid})
    
    let cartArray = [];

    if(cart.items.length === 0) {

      cartArray.push(illustrationid)

      await ShoppingCart.findByIdAndUpdate(cart._id, {items: cartArray})

    } else {

      cart.items.forEach((item) => {
        cartArray.push(item)
      })
      
      cartArray.push(illustrationid)
  
      await ShoppingCart.findByIdAndUpdate(cart._id, {items: cartArray})
    }

    let response = await ShoppingCart.findOne({owner: userid})

    res.json(response);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;