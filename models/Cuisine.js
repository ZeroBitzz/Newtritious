const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cuisine extends Model {}

Cuisine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    african: {
      type: BOOLEAN,
      allowNull: false,
    },
    american: {
      type: BOOLEAN,
      allowNull: false,
    },
    british: {
      type: BOOLEAN,
      allowNull: false,
    },
    cajun: {
      type: BOOLEAN,
      allowNull: false,
    },
    caribbean: {
      type: BOOLEAN,
      allowNull: false,
    },
    chinese: {
      type: BOOLEAN,
      allowNull: false,
    },
    easternEuropean: {
      type: BOOLEAN,
      allowNull: false,
    },
    european: {
      type: BOOLEAN,
      allowNull: false,
    },
    french: {
      type: BOOLEAN,
      allowNull: false,
    },
    german: {
      type: BOOLEAN,
      allowNull: false,
    },
    greek: {
      type: BOOLEAN,
      allowNull: false,
    },
    irish: {
      type: BOOLEAN,
      allowNull: false,
    },
    indian: {
      type: BOOLEAN,
      allowNull: false,
    },
    italian: {
      type: BOOLEAN,
      allowNull: false,
    },
    japanese: {
      type: BOOLEAN,
      allowNull: false,
    },
    jewish: {
      type: BOOLEAN,
      allowNull: false,
    },
    korean: {
      type: BOOLEAN,
      allowNull: false,
    },
    latinAmerican: {
      type: BOOLEAN,
      allowNull: false,
    },
    mediterranean: {
      type: BOOLEAN,
      allowNull: false,
    },
    mexican: {
      type: BOOLEAN,
      allowNull: false,
    },
    middleEastern: {
      type: BOOLEAN,
      allowNull: false,
    },
    nordic: {
      type: BOOLEAN,
      allowNull: false,
    },
    southern: {
      type: BOOLEAN,
      allowNull: false,
    },
    spanish: {
      type: BOOLEAN,
      allowNull: false,
    },
    thai: {
      type: BOOLEAN,
      allowNull: false,
    },
    vietnamese: {
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

module.exports = Cuisine;
