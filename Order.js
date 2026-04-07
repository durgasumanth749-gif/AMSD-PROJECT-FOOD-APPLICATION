const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      foodId: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
      quantity: Number
    }
  ],
  totalAmount: Number,
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Order", orderSchema);
