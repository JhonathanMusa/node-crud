const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/user", (req, res) => {
  res.render("pages/user");
});

router.get("/view", (req, res) => {
  res.render("pages/view");
});

router.get("/about", (req, res) => {
  res.render("pages/about");
});

module.exports = router;
