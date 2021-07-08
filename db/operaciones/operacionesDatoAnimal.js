const Animal = require("../schemas/Animal");
const Especie = require("../schemas/Especie");

const listarAnimalDuenyo = async (idDuenyo, nChip) => {
    const animalDuenyoChip = await Animal.findOne({
      include: {
        model: Especie ,
        required: true,

      },
        where: { n_chip: +nChip ,
        duenyo: idDuenyo }
    });
    return animalDuenyoChip;

};
module.exports = {
  listarAnimalDuenyo,
};