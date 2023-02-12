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
      defaultValue: false,
    },
    american: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    british: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    cajun: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    caribbean: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    chinese: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    easternEuropean: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    european: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    french: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    german: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    greek: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    irish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    indian: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    italian: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    japanese: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    jewish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    korean: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    latinAmerican: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    mediterranean: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    mexican: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    middleEastern: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    nordic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    southern: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    spanish: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    thai: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    vietnamese: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
