const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserDiet extends Model {}

UserDiet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    paleo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    vegan: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    vegetarian: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    keto: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    calorie_restriction: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    gluten_free: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "userDiet",
  }
);

module.exports = UserDiet;
