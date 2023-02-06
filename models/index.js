const User = require("./User");
const Allergies = require("./Allergies");
const Calories = require("./Calories");
const Cuisine = require("./Cuisine");
const Diet = require("./Diet");

User.hasOne(Allergies, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Allergies.belongsToMany(User, {
  foreignKey: "user_id",
});

User.hasOne(Calories, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Calories.belongsToMany(User, {
  foreignKey: "user_id",
});

User.hasOne(Cuisine, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Cuisine.belongsToMany(User, {
  foreignKey: "user_id",
});

User.hasOne(Diet, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Diet.belongsToMany(User, {
  foreignKey: "user_id",
});

module.exports = { User, Allergies, Calories, Cuisine, Diet };
