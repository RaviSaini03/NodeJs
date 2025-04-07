const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pinterestdatabase");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post'
  },
  dp: {
    type: String, // because of url of image from user system
    default: '', // default profile picture fro everyone
  },
  posts: [],

}, { timestamps: true });

module.exports = mongoose.model("user", userSchema);