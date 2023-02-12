const User = require("./User");
const UserAllergies = require("./UserAllergies");
const userCuisine = require("./UserCuisine");
const userDiet = require("./UserDiet");
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

User.hasOne(userCuisine, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
userCuisine.belongsTo(User, {
  foreignKey: "user_id",
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
  userCuisine,
  userDiet,
};
