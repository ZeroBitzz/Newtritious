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
      allowNull: false,
    },
    vegan: {
      type: BOOLEAN,
      allowNull: false,
    },
    vegetarian: {
      type: BOOLEAN,
      allowNull: false,
    },
    keto: {
      type: BOOLEAN,
      allowNull: false,
    },
    calorieRestriction: {
      type: BOOLEAN,
      allowNull: false,
    },
    glutenFree: {
      type: BOOLEAN,
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
