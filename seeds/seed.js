const sequelize = require("../config/connection");
const { User, UserCuisine, UserAllergies } = require("../models");

const userData = require("./userData.json");
const allergyData = require("./allergyData.json");
const cuisineData = require("./cuisineData.json");
const dietData = require("./dietData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const user = await User.bulkCreate(userData, {});
  const allergies = await UserAllergies.bulkCreate(allergyData, {});
  const cuisine = await UserCuisine.bulkCreate(cuisineData, {});
  const diet = await UserCuisine.bulkCreate(dietData, {});

  process.exit(0);
};

seedDatabase();
