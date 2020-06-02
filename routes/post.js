const express = require("express");
const router = express.Router();
const db = require("../models");

// renders all post
router.get("/dashboard", function (req, res, next) {
      db.Posts.findAll()
    .then((Posts) =>{
  res.render("dashboard.ejs", {
    title: "Blog Repository",
    user: req.session.user || null,
    email: req.session.user || null,
    Posts: Posts,
  })
});
});


// for new post
// router.post("/dashboard", (req, res) => {
//     const { title, content, author } = req.body;
    
//     db.Posts.Create()
//     .then((Posts) => {
//     res.redirect("/users/dashboard") 
//     });
// });

module.exports= router;