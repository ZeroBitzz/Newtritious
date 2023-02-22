const router = require("express").Router();
const { User, UserAllergies, UserCuisine, UserDiet } = require("../../models");
const apiKey = process.env.API_KEY;
const apiBase = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
// const apiAllergies = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&intolerances=${UserAllergies}`;
// const apiCuisine = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${UserCuisine}`;

router.get("/", async (req, res) => {
  try {
    const userId = req.session.user_id;
    console.log(userId);
    const userCuisine = await User.findOne({
      where: { id: userId },
      include: [{ model: UserCuisine }],
    });
    const userAllergies = await User.findOne({
      where: { id: userId },
      include: [{ model: UserAllergies }],
    });
    // const userDiet = await User.findOne({
    //   where: { id: userId },
    //   include: [{ model: UserDiet }],
    // });
    const usersCuisine = Object.keys(userCuisine.userCuisine.dataValues).filter(
      (k) => userCuisine.userCuisine.dataValues[k] === true
    );
    const usersAllergies = Object.keys(
      userAllergies.userAllergy.dataValues
    ).filter((k) => userAllergies.userAllergy.dataValues[k] === true);
    // put this in if we get diet to work
    // const usersDiet = Object.keys(userData.userDiet.dataValues).filter(
    //   (k) => userData.userDiet.dataValues[k] === true
    // );
    console.log(usersAllergies);
    const getApi = async (event) => {
      await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${usersCuisine}&intolerances=${usersAllergies}`,
        {
          method: "POST",
          body: JSON.stringify(),
          headers: { "Content-Type": "application/json" },
        }
      );
    };
    getApi();
  } catch (err) {
    res.status(400).json(err);
    console.log("this failed");
  }
});

module.exports = router;
