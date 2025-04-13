var express = require('express');
var router = express.Router();
const userModel = require('./users');
const postModel = require('./post');
const passport = require('passport');
const localStrategy = require("passport-local");
const upload = require('./multer');

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.get('/home', isLoggedIn, function(req, res, next){
  res.render('feed', {title: 'Profile'});
});

router.post('./upload'), upload.single("file"), function(req, res, next) {
  if(!req.file) {
    return res.status(400).send('No files were uploaded.');
  }
  res.send('File uploaded successfully!');
}

router.post("/register", function(req, res){
  const {username, useremail, fullname} = req.body;
  const userData = new userModel({username, useremail, fullname});

  userModel.register(userData, req.body.password)
  .then(function(){
    passport.authenticate("local")(req, res, function(){
      res.redirect("/home");
    });
  });
});

router.get('/login', function(req, res) {
  res.render('login', {error: req.flash('error')});
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/home",
  failureRedirect: "/login",
  failureFlash: true
}), function(req, res, next){
});

router.post("/logout", function(req, res){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

router.get('/profile', isLoggedIn, async function(req, res, next) {
  const user = await userModel.findOne({
    username: req.session.passport.user
  });
  res.render('index', {user});
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect("/");
}

module.exports = router;
