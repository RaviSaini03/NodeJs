const express = require("express")
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index", {name: "Rohit"});
});

app.get("/profile", function(req, res) {
    res.send("Profile");
});

app.get(`/profile/:usename`, function(req, res) {
    res.send(`profile of ${req.params.usename}`)
})

app.listen(3000);
