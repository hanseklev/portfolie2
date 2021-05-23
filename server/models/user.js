const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  userType: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
});

const User = mongoose.model("User", userSchema);
module.exports = User