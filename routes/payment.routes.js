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

module.exports = router;

/*
  const newCart = await ShoppingCart.create({owner: userid})
  cartId.push(newCart)
  await User.findByIdAndUpdate(userid, {ShoppingCart: cartId})
*/