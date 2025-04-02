const express = require("express");
const app = express();

app.use(function(res, res, next){
    console.log("hellow from middle ware");
    next();
});

app.use(function(res, res, next){
    console.log("hellow from middle ware1");
    next();
});

app.get("/", function(res, req) {
    res.send("Hello Ravi");
});

app.get("/profile", function(res, req) {
    res.send("My Profile");
});

app.listen(3000);