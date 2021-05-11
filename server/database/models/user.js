const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userType: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
});

const User = mongoose.model("User", userSchema);
module.exports = User
