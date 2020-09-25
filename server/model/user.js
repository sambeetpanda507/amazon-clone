const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetToken: String,
    tokenExpiration: Date,
    cart: {
      cartItem: Number,
      products: [{ productId: String, productName: String, price: Number }],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
