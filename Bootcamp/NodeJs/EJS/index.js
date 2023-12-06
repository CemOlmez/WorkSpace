const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/", (req,res) =>{
    res.render("home.ejs")
})

app.get("/r/:subreddit", (req,res) =>{
    const { subreddit } = req.params;
    res.render("subreddit", { subreddit});
})

app.get("/rand", (req, res) => {
    res.render("random.ejs")
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})v mc