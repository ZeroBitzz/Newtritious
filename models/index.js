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

Cuisine.belongsToMany(User, {
  through: {
    model: User,
  },
});
User.hasOne(Cuisine, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasOne(Diet, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Diet.belongsToMany(User, {
  through: {
    model: User,
  },
});

module.exports = { User, Allergies, Calories, Cuisine, Diet };
