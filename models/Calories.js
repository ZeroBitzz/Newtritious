const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Calories extends Model {}

Calories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    breakfast: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lunch: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dinner: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    snack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "calories",
  }
);

module.exports = Calories;
