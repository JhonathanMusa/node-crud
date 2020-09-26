const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

router.get("/user", (req, res) => {
  res.render("pages/user.ejs");
});

router.get("/view", (req, res) => {
  res.render("pages/view.ejs");
});

router.get("/about", (req, res) => {
  res.render("pages/about.ejs");
});

module.exports = router;
