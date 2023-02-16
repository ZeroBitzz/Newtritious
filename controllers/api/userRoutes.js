const router = require("express").Router();
const { User, UserAllergies, UserCuisine, UserDiet } = require("../../models");

router.get("/", async (req, res) => {
  console.log("just checking");
});

//to create a new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    console.log(userData.id);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//to create a new user's restrictions
router.post("/restrictions", async (req, res) => {
  console.log("testing");
  try {
    const userId = 2;
    console.log("++++ ============");
    console.log(req.body.allergies[1]);

    const allergyData = await UserAllergies.create({
      user_id: userId,
      peanuts: req.body.allergies[1].peanuts,
      treeNuts: req.body.allergies[2].treeNuts,
      lactose: req.body.allergies[3].lactose,
      gluten: req.body.allergies[4].gluten,
      shellfish: req.body.allergies[5].shellfish,
    });
    const dietData = await UserDiet.create({
      user_id: userId,
      keto: req.body.diet[1].keto,

      ...req.body,
      user_id: userId,
    });
    const cuisineData = await UserCuisine.create({
      ...req.body,
      user_id: userId,
    });
    res.status(200).json(allergyData, dietData, cuisineData);
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
