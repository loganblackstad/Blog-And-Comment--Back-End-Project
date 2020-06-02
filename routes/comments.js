const express = require("express");
const router = express.Router();
const db = require("../models");

//renders all comments
router.get("/commentpage", function (req, res, next) {
    db.Comments.findAll()
        .then((Comments) => {
            res.render("commentpage.ejs", {
                title: "Blog Repository",
                user: req.session.user || null,
                Comments: Comments,
            })
        });
});

// add comment to a post
router.post("/commentspage/:post_id", (req, res, next) => {
    const values = {
      author: req.body.author,
      remark: req.body.remark,
      post_id: req.params.post_id,
    };
  
    db.Posts.create(values)
      .then(function (user) {
        // res.redirect("/users/dashboard");
        res.json(user);
      });
  });



// deletes comment 
router.delete("/comments/:post_id", (req, res, next) => {
    const post_id = req.params.post_id;
  
    db.Posts.destroy({ where: { id: parseInt(post_id) } })
      .then(rowsDeleted => {
        if (rowsDeleted === 1) {
          console.log('Deleted successfully');
        }
      })
      .catch(err => {
        console.log(err);
      });
  });

module.exports = router;