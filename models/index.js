const User = require("./User");
const UserAllergies = require("./UserAllergies");
const UserCuisine = require("./UserCuisine");
const UserDiet = require("./UserDiet");
const Calories = require("./Calories");

User.hasOne(UserAllergies, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
UserAllergies.belongsTo(User, {
  foreignKey: "user_id",
});

// User.hasOne(Calories, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });
// Calories.belongsToMany(User, {
//   through: {
//     model: User,
//   },
// });

User.hasOne(UserCuisine, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
UserCuisine.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasOne(UserDiet, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
UserDiet.belongsToMany(User, {
  through: {
    model: User,
  },
});

module.exports = {
  User,
  UserAllergies,
  Calories,
  UserCuisine,
  UserDiet,
};
