const express = require("express");
const router = express.Router();

// GET home page
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "A Blog",
    user: req.session.user || null,
  });
});

module.exports = router;
