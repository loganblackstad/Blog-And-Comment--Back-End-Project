const express = require("express");
const router = express.Router();
const db = require("../models");

//renders all comments
router.get("/dashboard", function (req, res, next) {
    db.Comments.findAll()
        .then((Comments) => {
            res.render("dashboard.ejs", {
                title: "Blog Repository",
                user: req.session.user || null,
                Comments: Comments,
            })
        });
});

module.exports = router;