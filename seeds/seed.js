const sequelize = require('../config/connection');
const { User, Allergies, Calories, Cuisine, Diet } = require('../models');

const userData = require('./userData.json');
const allergyData = require('./allergyData.json');
const calorieData = require('./calorieData.json');
const allergyData = require('./allergyData.json');
const allergyData = require('./allergyData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
