const User = require("./User");
const UserAllergies = require("./UserAllergies");
const userCuisine = require("./UserCuisine");
const userDiet = require("./UserDiet");
const Allergies = require("./Allergies");
const Calories = require("./Calories");
const Cuisine = require("./Cuisine");
const Diet = require("./Diet");

User.hasOne(UserAllergies, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
UserAllergies.belongsToMany(User, {
  through: {
    model: User,
    unique: false,
  },
});

User.hasOne(Calories, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Calories.belongsToMany(User, {
  through: {
    model: User,
  },
});

User.hasOne(userCuisine, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
userCuisine.belongsToMany(User, {
  through: {
    model: User,
    unique: false,
  },
});

User.hasOne(userDiet, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
userDiet.belongsToMany(User, {
  through: {
    model: User,
  },
});

module.exports = {
  User,
  UserAllergies,
  Calories,
  Cuisine,
  Diet,
  Allergies,
  userCuisine,
  userDiet,
};
