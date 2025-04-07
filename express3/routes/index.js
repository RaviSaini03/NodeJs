var express = require('express');
var router = express.Router();
const userModel = require('./users');
const passport = require("passport");
const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function(req, res) {
  res.render('index');
});

router.get('./profile', isLoggedIn, function(req, res){
  res.send('welcome to profile');
});

//register route
router.post('./register', function(req, res){
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });

  userModel.register(userdata, req.body.password)
    .then(function(registereduser){
      passport.authenticate("local")(req, res, function() {
        res.redirect('./profile');
      });
    });
});

router.post('./login', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}), function(req, res){})

router.get("/logout", function (req, res, next){
  req.logout( function(err) {
    if(err) return next(err);
    res.redirect("/");
  });
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}

// flash messages
/*
router.get('/error', function(req, res) {
  req.flash("age", 1);
  res.send("error ocuured");
});

router.get('/check', function(req, res) {
  console.log(req.flash("age"));
  res.send("check it");
});
*/

/* 
router.get('/create', async function(req, res) {
  let userData = await userModel.create({
    username: "Ravindra",
    password: "Ravindrakumar",
    email: "ravindra035@gmail.com",
    skills: ['Html', 'Css', 'ReactJs', 'C', 'OOps', 'C++', 'Java', 'Python'],
  });
  res.send(userData);
});
*/

// finding by the case sensitive usernames of users
/*
router.get('/find', async function(req, res){
  // we use "^" in starting and "$" in ending to insure that string starts form here and ends here
  var regex = new RegExp("^RavInDra$", 'i');
  let name = await userModel.find({username: regex});
  res.send(name);
});
*/

//finding by array values of different users
/*
router.get('/findarray', async function(req, res) {
  let user = await userModel.find({skills: {$all: ['C']}});
  res.send(user);
});
*/

// finding by date
/*
router.get('/findbydate', async function(req, res) {
  let date1 = new Date('2025-04-03');
  let date2 = new Date('2025-04-04');
  let user = await userModel.find({currentdate: {$gte: date1, $lte: date2}});
  res.send(user);
})
*/

//finding by existing of field
/*
router.get('/findbyfield', async function(req, res) {
  let user = await userModel.find({skills: {$exists: true}});
  res.send(user);
})
*/

// finding by lenght of specific field
/*
router.get('/findbylength', async function(req, res){
  let user = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: '$password' }, 0] },
        { $lte: [{ $strLenCP: '$password' }, 10] }
      ]
    }
  });
  res.send(user);
});
*/


module.exports = router;
