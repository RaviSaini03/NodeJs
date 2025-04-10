const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pinterestdatabase");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  fullname: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  dp: {
    type: String, // because of url of image from user system
    default: '', // default profile picture for everyone
  },

}, { timestamps: true });

userSchema.plugin(plm);

module.exports = mongoose.model("User", userSchema);