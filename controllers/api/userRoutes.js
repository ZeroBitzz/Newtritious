const router = require("express").Router();
const { User, UserAllergies, UserCuisine, UserDiet } = require("../../models");

router.get("/", async (req, res) => {
  console.log("just checking");
});

//to create a new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//to create a new user's allergies
router.post("/:id", async (req, res) => {
  try {
    const allergyData = await UserAllergies.create(req.body.allergyData);
    const dietData = await UserDiet.create(req.body.dietData);
    const cuisineData = await UserCuisine.create(req.body.cuisineData);

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET a single user
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      // JOIN with UserAllergies, UserDiet, UserCuisine
      include: [{ model: UserAllergies, as: "users_allergies" }],
      include: [{ model: UserDiet, as: "users_diet" }],
      include: [{ model: UserCuisine, as: "users_cuisine" }],
    });

    if (!userData) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//to login
router.post("/login", async (req, res) => {
  console.log("why!?!?!");
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

      res.json({ user: userData, message: "You are now logged in!" });
    });
    res.render("../views/myrecipes");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
