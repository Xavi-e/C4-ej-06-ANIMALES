const { DataTypes } = require("sequelize");
const sequelize = require("..");
const Animal = require("./Animal");

const Especie = sequelize.define(
    "Especie",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(20),
            unique: true,
        },
    },
    {
        tableName: "Especie",
        timestamps: false,
    }
);

Animal.hasOne(Especie, { foreignKey: "especie" });
Especie.belongsTo(Animal, { foreignKey: "especie" });

module.exports = Especie;