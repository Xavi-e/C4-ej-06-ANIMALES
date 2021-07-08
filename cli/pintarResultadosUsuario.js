const chalk = require("chalk");

const pintarAnimal = (animal) => {
  console.log(datosAnimal(animal));
};
const pintarAnimales = (animales) => {
  for (const animal of animales) {
    console.log(datosAnimal(animal));
  }
};
const datosAnimal = (animal) =>
  `\n${chalk.bold("Nombre:")} ${animal.nombre}\n${chalk.bold("Edad:")} ${
    animal.edad
  }\n${chalk.bold("Número de chip:")} ${animal.n_chip}\n${chalk.bold(
    "Especie:"
  )} ${animal.Especie.nombre}`;
const validarNombre = (nombre) => {
  if (!nombre) {
    return { valido: false, mensaje: "No se ha introducido ningún nombre!!!" };
  }
  if (!/^[A-Za-z]+$/.test(nombre)) {
    return { valido: false, mensaje: "Nombre no válido!!!" };
  }
  return { valido: true, mensaje: null };
};
module.exports = {
  pintarAnimal,
  pintarAnimales,
  datosAnimal,
  validarNombre,
};
