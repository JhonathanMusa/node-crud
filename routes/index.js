const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

router.get("/users", (req, res) => {
  res.render("pages/users.ejs");
});

router.get("/about", (req, res) => {
  res.render("pages/about.ejs");
});

module.exports = router;
