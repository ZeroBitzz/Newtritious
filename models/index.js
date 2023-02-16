const User = require("./User");
const UserAllergies = require("./UserAllergies");
const UserCuisine = require("./UserCuisine");
const UserDiet = require("./UserDiet");

User.hasOne(UserAllergies, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
UserAllergies.belongsTo(User, {
  foreignKey: "user_id",
});

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
UserDiet.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  UserAllergies,
  UserCuisine,
  UserDiet,
};
