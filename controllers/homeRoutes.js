const router = require("express").Router();
// const { User } = require('../models');
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
      style: "homepage.css",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/postItem", withAuth, async (req, res) => {
  try {
    res.render("create-items", {
      logged_in: req.session.logged_in,
      style: "",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login", {
    style: "login.css",
  });
});

module.exports = router;
