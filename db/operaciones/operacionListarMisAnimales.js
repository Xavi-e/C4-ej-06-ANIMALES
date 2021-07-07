const Animal = require("../schemas/Animal");
const Especie = require("../schemas/Especie");

const listarMisAnimales = async (idDuenyo) => {
  const animales = await Animal.findAll({
    where: {
      duenyo: idDuenyo,
    },
    include: [
      {
        model: Especie,
        required: true,
      },
    ],
    order: [
      ["especie", "DESC"],
      ["nombre", "DESC"],
    ],
  });
  return animales;
};

module.exports = {
  listarMisAnimales,
};
