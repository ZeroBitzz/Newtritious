const router = require("express").Router();
// const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile").json({ message: "You are already logged in. " });
    return;
  }

  res.render("signup");
});

router.get("/myrecipes", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render("myrecipes", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/userRestrictions", (req, res) => {
  const allergies = ["peanuts", "treeNuts", "lactose", "gluten", "shellfish"];
  const diets = [
    "keto",
    "paleo",
    "vegan",
    "vegetarian",
    "calorieRestriction",
    "glutenFree",
  ];
  const cuisine = [
    "african",
    "american",
    "british",
    "cajun",
    "caribbean",
    "chinese",
    "easternEuropean",
    "european",
    "french",
    "german",
    "greek",
    "irish",
    "indian",
    "italian",
    "japanese",
    "jewish",
    "korean",
    "latinAmerican",
    "mediterranean",
    "mexican",
    "middleEastern",
    "nordic",
    "southern",
    "spanish",
    "thai",
    "vietnamese",
  ];
  res.render("userRestrictions", { allergies, diets, cuisine });
});

router.get("/preferences", (req, res) => {
  res.render("preferences");
});
module.exports = router;
