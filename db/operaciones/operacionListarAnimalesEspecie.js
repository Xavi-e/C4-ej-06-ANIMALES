const { Op } = require("sequelize");
const Animal = require("../schemas/Animal");
const Especie = require("../schemas/Especie");

const listarMisAnimalesPorEspecie = async (idDuenyo, especie) => {
  const animales = await Especie.findAll({
    includes: {
      model: Animal,
      required: true,
      where: {
        nombre: {
          [Op.like]: especie,
        },
      },
    },
    where: {
      duenyo: idDuenyo,
    },
  });
  return animales;
};

module.exports = {
  listarMisAnimalesPorEspecie,
};
