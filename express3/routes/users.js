const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/express3");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  skills: {
    type: Array,
    default: []
  },
  currentdate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("user", userSchema);