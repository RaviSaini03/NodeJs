var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/error', function(req, res) {
  req.flash("age", 1);
  res.send("error ocuured");
});

router.get('/check', function(req, res) {
  console.log(req.flash("age"));
  res.send("check it");
})

module.exports = router;
