const sequelize = require("../config/connection");
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
// const calorieData = require("./calorieData.json");
// const cuisineData = require("./allergyData.json");
// const calorieData = require("./allergyData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
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

  process.exit(0);
};

seedDatabase();
