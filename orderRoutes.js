const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

// Place Order
router.post("/place", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ message: "Order Placed" });
});

// View My Orders
router.get("/my/:userId", async (req, res) => {
  const orders = await Order.find({ userId: req.params.userId })
    .populate("items.foodId");
  res.json(orders);
});

// Admin View All Orders
router.get("/all", async (req, res) => {
  const orders = await Order.find()
    .populate("userId")
    .populate("items.foodId");
  res.json(orders);
});

module.exports = router;
