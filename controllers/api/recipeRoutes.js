const router = require("express").Router();
//need to add UserDiet if get it to work (to line 3)
const { User, UserAllergies, UserCuisine } = require("../../models");
const apiKey = process.env.API_KEY;
const apiBase = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;
// const apiAllergies = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&intolerances=${UserAllergies}`;
// const apiCuisine = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${UserCuisine}`;

router.get("/", async (req, res) => {
  try {
    const userId = req.session.user_id;
    console.log(userId);
    const userData = await User.findOne({
      where: { id: userId },
      include: [{ model: UserCuisine }],
      //   include: [{ model: UserAllergies }],
      //   include: [{ model: UserDiet }],
    });
    const usersCuisine = Object.keys(userData.userCuisine.dataValues).filter(
      (k) => userData.userCuisine.dataValues[k] === true
    );
    // put these in if we get allergies and diet to work
    // const usersAllergies = Object.keys(
    //   userData.userAllergies.dataValues
    // ).filter((k) => userData.userAllergies.dataValues[k] === true);
    // const usersDiet = Object.keys(userData.userDiet.dataValues).filter(
    //   (k) => userData.userDiet.dataValues[k] === true
    // );
    console.log(usersCuisine);
    const getApi = async (evnt) => {
      await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${usersCuisine}`,
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
