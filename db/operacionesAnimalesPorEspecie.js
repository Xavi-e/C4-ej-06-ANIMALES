
const Especie = require("..");

const listarAnimales = async () => {
  const animales = await animales.findAll({
    include: { model: Especie },
    order: [
      ["especie", "DESC"],
      ["nombre", "DESC"],
    ],
  });
  console.log("\nAnimales por nombre y especie:");
  for (const animal of animales) {
    console.log(
      `${animal.nombre} -> Edad: ${animal.edad} Especie: ${animal.Especie.nombre}`
    );
  }
};

module.exports = {
  listarAnimales,
};