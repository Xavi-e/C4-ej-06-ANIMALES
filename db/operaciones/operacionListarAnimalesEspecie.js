const { Op } = require("sequelize");
const Animal = require("../schemas/Animal");
const Especie = require("../schemas/Especie");

const listarMisAnimalesPorEspecie = async (idDuenyo, especie) => {
  const animales = await Animal.findAll({
    include: {
      model: Especie,
      required: true,

    },
    where: { duenyo : idDuenyo, 
      nombre: {
        [Op.like]: especie,
      },
    },
  });
  return animales;
};

module.exports = {
  listarMisAnimalesPorEspecie,
};
