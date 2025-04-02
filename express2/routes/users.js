// install mongoosejs
// require and setup connection
// make schema
// create model and export

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/paptawandb");

const userschema = mongoose.Schema({
  username: String,
  age: Number,
  password: String
});

module.exports = mongoose.model("user", userschema)