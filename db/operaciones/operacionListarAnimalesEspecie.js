const { Op } = require("sequelize");
const Animal = require("../schemas/Animal");
const Especie = require("../schemas/Especie");

const listarMisAnimalesPorEspecie = async (idDuenyo, especie) => {
  const animales = await Especie.findAll({
    include: {
      model: Animal,
      required: true,
      where: {
        duenyo: idDuenyo,
      },
    },
    where: {
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
