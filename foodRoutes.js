const express = require("express");
const Food = require("../models/Food");

const router = express.Router();

// Add Food (Admin)
router.post("/add", async (req, res) => {
  const food = new Food(req.body);
  await food.save();
  res.json({ message: "Food Added" });
});

// Get All Foods
router.get("/", async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
});

// Delete Food
router.delete("/:id", async (req, res) => {
  await Food.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
