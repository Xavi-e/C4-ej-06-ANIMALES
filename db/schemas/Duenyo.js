const { DataTypes } = require("sequelize");
const sequelize = require("..");

const Duenyo = sequelize.define(
  "Duenyo",
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
    },
  },
  {
    tableName: "duenyo",
    timestamps: false,
  }
);

module.exports = Duenyo;
