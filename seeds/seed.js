const sequelize = require("../config/connection");
const { User, Calories, userCuisine, UserAllergies } = require("../models");

const userData = require("./userData.json");
const allergyData = require("./allergyData.json");
const cuisineData = require("./cuisineData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const user = await User.bulkCreate(userData, {});
  const allergies = await UserAllergies.bulkCreate(allergyData, {});
  const cuisine = await userCuisine.bulkCreate(cuisineData, {});

  process.exit(0);
};

seedDatabase();
