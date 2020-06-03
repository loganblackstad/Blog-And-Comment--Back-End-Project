const express = require("express");
const router = express.Router();
const db = require("../models");

// renders all post
router.get("/dashboard", function (req, res, next) {
  db.Posts.findAll().then((Posts) => {
    res.render("dashboard.ejs", {
      title: "Blog Repository",
      user: req.session.user || null,
      email: req.session.user || null,
      Posts: Posts,
    });
  });
});

router.get("/:id", function (req, res, next) {
  console.log(req.session);
  db.Posts.findByPk(req.params.id).then((Post) => {
    res.render("post-template.ejs"),
      {
        title: Post.title,
        author: Post.author,
        content: Post.body_content,
        user: req.session.user || null,
      };
  });
});

router.get("/:id/comments", function (req, res, next) {
  db.Comments.findAll({ where: { post_id: req.params.id } }).then(
    (comments) => {
      res.render("post-template.ejs", {
        comments: comments,
      });
    }
  );
});

// for new post
// router.post("/dashboard", (req, res) => {
//     const { title, content, author } = req.body;

//     db.Posts.Create()
//     .then((Posts) => {
//     res.redirect("/users/dashboard")
//     });
// });

module.exports = router;
