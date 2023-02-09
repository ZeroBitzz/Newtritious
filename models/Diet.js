const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Diet extends Model {}

Diet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    paleo: {
      type: DataTypes.BOOLEAN,
      defaultValue: "paleo",
      allowNull: false,
    },
    vegan: {
      type: DataTypes.BOOLEAN,
      defaultValue: "vegan",
      allowNull: false,
    },
    vegetarian: {
      type: DataTypes.BOOLEAN,
      defaultValue: "vegetarian",
      allowNull: false,
    },
    keto: {
      type: DataTypes.BOOLEAN,
      defaultValue: "keto",
      allowNull: false,
    },
    calorieRestriction: {
      type: DataTypes.BOOLEAN,
      defaultValue: "calorieRestriction",
      allowNull: false,
    },
    glutenFree: {
      type: DataTypes.BOOLEAN,
      defaultValue: "glutenFree",
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
    modelName: "diet",
  }
);

module.exports = Diet;
