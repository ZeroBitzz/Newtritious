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
      type: BOOLEAN,
      defaultValue: "paleo",
      allowNull: false,
    },
    vegan: {
      type: BOOLEAN,
      defaultValue: "vegan",
      allowNull: false,
    },
    vegetarian: {
      type: BOOLEAN,
      defaultValue: "vegetarian",
      allowNull: false,
    },
    keto: {
      type: BOOLEAN,
      defaultValue: "keto",
      allowNull: false,
    },
    calorieRestriction: {
      type: BOOLEAN,
      defaultValue: "calorieRestriction",
      allowNull: false,
    },
    glutenFree: {
      type: BOOLEAN,
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
