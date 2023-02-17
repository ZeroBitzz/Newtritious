const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");
const { getRecipe } = require("./api/spoonacular");

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
    res.redirect("/myRecipes");
    return;
  } else {
    res.render("login");
  }
});

//to login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log(userData.username);

      // res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/myrecipes").json({ message: "You are already logged in. " });
    return;
  }

  res.render("signup");
});

router.get("/getRecipe", async (req, res) => {
  const { cuisine, tolerances, maxCalories, diet } = req.query;
  const recipe = await getRecipe(cuisine, tolerances, maxCalories, diet);
  res.send(recipe);
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
    "paleo",
    "vegan",
    "vegetarian",
    "keto",
    "calorie_restriction",
    "gluten_free",
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
