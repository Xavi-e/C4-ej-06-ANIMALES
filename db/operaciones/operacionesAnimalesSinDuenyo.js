const Animal = require("../schemas/Animal");
const Especie = require("../schemas/Especie");

const animalesSinDuenyo = async () => {
  const animalesPaAdoptar = await Animal.findAll({
    where: {
      duenyo: null,
    },
    include: {
      model: Especie,
      required: true,
    },
  });
  return animalesPaAdoptar;
};
module.exports = {
  animalesSinDuenyo,
};
