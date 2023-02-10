const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Allergies extends Model {}

Allergies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    allergy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "allergy",
  }
);

module.exports = Allergies;
