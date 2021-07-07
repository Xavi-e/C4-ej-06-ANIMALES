const { DataTypes } = require("sequelize");
const sequelize = require("..");
const Duenyo = require("./Duenyo");
const Especie = require("./Especie");

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
Animal.hasMany(Duenyo, { foreignKey: "duenyo" });
Duenyo.belongsTo(Animal, { foreignKey: "duenyo" });

Animal.hasOne(Especie, { foreignKey: "especie" });
Especie.belongsTo(Animal, { foreignKey: "especie" });
module.exports = Animal;
