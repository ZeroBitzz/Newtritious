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
      allowNull: false,
    },
    treeNuts: {
      type: BOOLEAN,
      allowNull: false,
    },
    lactose: {
      type: BOOLEAN,
      allowNull: false,
    },
    gluten: {
      type: BOOLEAN,
      allowNull: false,
    },
    shellfish: {
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
    modelName: "allergies",
  }
);

module.exports = Allergies;
