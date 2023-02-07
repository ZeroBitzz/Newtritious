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
    peanuts: {
      type: BOOLEAN,
      defaultValue: "peanuts",
      allowNull: false,
    },
    treeNuts: {
      type: BOOLEAN,
      defaultValue: "treeNuts",
      allowNull: false,
    },
    lactose: {
      type: BOOLEAN,
      defaultValue: "lactose",
      allowNull: false,
    },
    gluten: {
      type: BOOLEAN,
      defaultValue: "gluten",
      allowNull: false,
    },
    shellfish: {
      type: BOOLEAN,
      defaultValue: "shellfish",
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
    modelName: "allergies",
  }
);

module.exports = Allergies;
