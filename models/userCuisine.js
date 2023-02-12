const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class userCuisine extends Model {}

userCuisine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    african: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    american: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    british: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    cajun: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    caribbean: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    chinese: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    easternEuropean: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    european: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    french: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    german: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    greek: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    irish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    indian: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    italian: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    japanese: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    jewish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    korean: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    latinAmerican: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    mediterranean: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    mexican: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    middleEastern: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    nordic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    southern: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    spanish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    thai: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    vietnamese: {
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
    modelName: "userCuisine",
  }
);

module.exports = userCuisine;
