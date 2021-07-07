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
  console.log("\nAnimales por nombre y especie:");
  console.log(`total: ${animales.length}`);
  for (const animal of animales) {
    console.log(
      `${animal.nombre} -> Edad: ${animal.edad} Especie: ${animal.Especie.nombre}`
    );
  }
};

module.exports = {
  listarMisAnimales,
};
