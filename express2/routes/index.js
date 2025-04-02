var express = require('express');
var router = express.Router();
const userModel = require("./users");

router.get("/", function(req, res) {
  res.render("index");
});

// creating documents
/*
router.get("/create", async function(req, res) {
  const createduser = await userModel.create({
    username: "Ravi",
    age: 20,
    password: "Ravi030504"
  });
});
*/


// reading all documents
/*
router.get("/allusers", async function(req, res) {
  let allusers = await userModel.find();
  res.send(allusers);
});
*/

// reading only one document
/*
router.get("/user", async function(req, res) {
  let user = await userModel.findOne({username: "Ravi"});
  console.log(user);
  res.send(user);
});
*/

//delete document
/*
router.get("/deleteuser", async function(req, res) {
  let deleteduser = await userModel.findOneAndDelete({username: "Ravi"});
  console.log(deleteduser);
  res.send(deleteduser);
});
*/

router.get("/user", async function(req, res){
  const alluser = await userModel.find();
  res.send(alluser);
});

module.exports = router;
