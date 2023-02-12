const sequelize = require("config/connection");
const {
  User,
  Calories,
  Cuisine,
  Diet,
  UserAllergies,
  Allergies,
} = require("../models");

const userData = require("./userData.json");
const allergyData = require("./allergyData.json");
const cuisineData = require("./cuisineData.json");
// const calorieData = require("./calorieData.json");
// const cuisineData = require("./allergyData.json");
// const calorieData = require("./allergyData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const allergies = await Allergies.bulkCreate(allergyData, {
    individualHooks: true,
    returning: true,
  });
  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const cuisine = await Cuisine.bulkCreate(cuisineData, {
    individualHooks: true,
    returning: true,
  });

  // for (const user of userData) {
  //   await User.create({
  //     ...post,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }
  for (const allergy of allergyData) {
    await Allergies.create({
      ...allergy,
    });
  }
  for (const user of userData) {
    await User.create({
      ...user,
    });
  }
  for (const cuisine of cuisineData) {
    await Cuisine.create({
      ...cuisine,
    });
  }

  process.exit(0);
};

seedDatabase();
