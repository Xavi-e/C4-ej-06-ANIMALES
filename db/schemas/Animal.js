const { DataTypes } = require("sequelize");
const sequelize = require("..");

const Animal = sequelize.define(
  "Animal",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING(9),
      unique: true,
      allowNull: false,
    },
    especie: DataTypes.INTEGER,
    duenyo: DataTypes.INTEGER,
    n_chip: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: "Animal",
    timestamps: false,
  }
);
module.exports = Animal;
