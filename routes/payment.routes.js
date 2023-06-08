const express = require("express");
const router = express.Router();
const ShoppingCart = require("../models/shoppinCart.model");

//get cart info
router.get("/:userid/cart", async (req, res) => {
  try {
    const {userid} = req.params;
    const cart = await ShoppingCart.findOne({owner: userid})

    await cart.populate("items")
    res.json(cart);
  } catch (err) {
    console.log(err)
  }
});

//change cart info
router.post("/:userid/cart/:illustrationid", async (req, res) => {
  try {
    const {userid, illustrationid} = req.params;

    const cart = await ShoppingCart.findOne({owner: userid}).populate("items")
    
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

//delete from cart
router.put("/:userid/cart/del/:illustrationid", async (req,res) => {
  try {
    const {userid, illustrationid} = req.params;
    const cart = await ShoppingCart.findOne({owner: userid})

    let cartArray = [];
    
    cart.items.forEach((item) => {
      if(!item._id === illustrationid){
        cartArray.push(item)
      }
    })

    await ShoppingCart.findByIdAndUpdate(cart._id, {items: cartArray})
    
    res.json({...cart,items:cartArray});
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;