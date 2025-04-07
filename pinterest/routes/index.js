var express = require('express');
var router = express.Router();
const userModel = require('./users');
const postModel = require('./post');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createuser', async function(req, res){
  let createduser = await userModel.create({
    username: "ravisaini",
    password: "ravi030504",
    fullName: "Ravi Saini",
    userEmail: "ravisainipaptawan030504@gmail.com",
    posts: [],
  });
  res.send(createduser);
});

router.get('/getuser', async function(req, res){
  let getuserinfo = await userModel.findOne({username: "ravisaini"});
  res.send(getuserinfo);
});

router.get('/createpost', async function(req, res){
  let createdpost = await postModel.create({
    postText: "nVedia Rtx 5090",
    user: "67f3fc3e9ef2b5d03e1d0c4e"
  });
  let user = await userModel.findOne({_id: "67f3fc3e9ef2b5d03e1d0c4e"});
  user.posts.push(createdpost._id);
  await user.save();
  res.send("done");
});


module.exports = router;
