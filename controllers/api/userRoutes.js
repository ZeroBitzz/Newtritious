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

//to create a new user's allergies
router.post("/allergies", async (req, res) => {
  try {
    const userId = 2;
    console.log("++++ ============");
    // console.log(req.body.cuisine[1]);

    const allergyData = await UserAllergies.create({
      user_id: userId,
      peanuts: req.body.allergies[1].peanuts,
      treeNuts: req.body.allergies[2].treeNuts,
      lactose: req.body.allergies[3].lactose,
      gluten: req.body.allergies[4].gluten,
      shellfish: req.body.allergies[5].shellfish,
    });
    res.status(200).json(allergyData);
  } catch (err) {
    res.status(400).json(err);
  }
});
//to create a new user's diets
// router.post("/diets", async (req, res) => {
//   console.log("diet");
//   try {
//     const userId = 2;
//     console.log("++++ ============");
//     // console.log(req.body.cuisine[1]);
//     const dietData = await UserDiet.create({
//       user_id: userId,
//       paleo: req.body.diet[1].paleo,
//       keto: req.body.diet[2].keto,
//       vegan: req.body.diet[3].vegan,
//       vegetarian: req.body.diet[4].vegetarian,
//       calorieRestriction: req.body.diet[5].calorieRestriction,
//       glutenFree: req.body.diet[6].glutenFree,
//     });
//     res.status(200).json(dietData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// //create a new user's cuisines
router.post("/cuisines", async (req, res) => {
  try {
    const userId = 2;
    console.log("we're not gonna make it!");
    // console.log(req.body.cuisine[1]);
    const cuisineData = await UserCuisine.create({
      user_id: userId,
      african: req.body.cuisine[1].african,
      american: req.body.cuisine[2].american,
      british: req.body.cuisine[3].british,
      cajun: req.body.cuisine[4].cajun,
      caribbean: req.body.cuisine[5].caribbean,
      chinese: req.body.cuisine[6].chinese,
      easternEuropean: req.body.cuisine[7].easternEuropean,
      european: req.body.cuisine[8].european,
      french: req.body.cuisine[9].french,
      german: req.body.cuisine[10].german,
      greek: req.body.cuisine[11].greek,
      irish: req.body.cuisine[12].irish,
      indian: req.body.cuisine[13].indian,
      italian: req.body.cuisine[14].italian,
      japanese: req.body.cuisine[15].japanese,
      jewish: req.body.cuisine[16].jewish,
      korean: req.body.cuisine[17].korean,
      latinAmerican: req.body.cuisine[18].latinAmerican,
      mediterranean: req.body.cuisine[19].mediterranean,
      mexican: req.body.cuisine[20].mexican,
      middleEastern: req.body.cuisine[21].middleEastern,
      nordic: req.body.cuisine[22].nordic,
      southern: req.body.cuisine[23].southern,
      spanish: req.body.cuisine[24].spanish,
      thai: req.body.cuisine[25].thai,
      vietnamese: req.body.cuisine[26].vietnamese,
    });
    res.status(200).json(cuisineData);
    console.log("is it working?");
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
