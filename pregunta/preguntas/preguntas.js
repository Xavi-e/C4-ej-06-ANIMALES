const inquirer = require("inquirer");
const chalk = require("chalk");
const {
  animalesSinDuenyo,
} = require("../../db/operaciones/operacionesAnimalesSinDuenyo");

const preguntarOpcionesUsuario = async () => {
  const animalesPaAdoptar = await animalesSinDuenyo();
  return [
    {
      name: "opciones",
      message: "Opciones",
      type: "list",
      choices: [
        {
          value: "todosMisAnimales",
          name: "Listar todos mis animales",
        },
        {
          value: "animalesUnaEspecie",
          name: "Listar todos mis animales de una especie",
        },
        {
          value: "datoAnimal",
          name: "Mostrar los datos de uno de mis animales",
        },
        {
          value: "adopta",
          name: "Adoptar un animal",
        },
        {
          value: "cambiarNombre",
          name: "Cambiar mi nombre",
        },
      ],
    },
    {
      name: "nombreEspecie",
      message: "Introduce el nombre de la especie:",
      value: "nombreEspecie",
      type: "input",
      when: (respuestasAnteriores) =>
        respuestasAnteriores.opciones === "animalesUnaEspecie",
    },
    {
      name: "numeroChip",
      message: "Introduce el número del chip de tu animal:",
      type: "input",
      when: (respuestasAnteriores) =>
        respuestasAnteriores.opciones === "datoAnimal",
    },
    {
      name: "animalAdoptar",
      message: "Escoge el animal el cuál desea adoptar",
      type: "list",
      choices: animalesPaAdoptar.map((animal) => ({
        name: `${chalk.bold("Nombre:")} ${animal.nombre} ${chalk.bold(
          "Edad:"
        )} ${animal.edad} ${chalk.bold("Número de chip:")} ${
          animal.n_chip
        } ${chalk.bold("Especie:")} ${animal.Especie.nombre}`,
        value: animal.id,
      })),
      when: (respuestasAnteriores) =>
        respuestasAnteriores.opciones === "adopta" &&
        animalesPaAdoptar.length > 0,
    },
    {
      name: "nuevoNombre",
      message: "Introduce el nuevo nombre:",
      type: "input",
      when: (respuestasAnteriores) =>
        respuestasAnteriores.opciones === "cambiarNombre",
    },
  ];
};
const preguntarDNI = [
  {
    name: "dni",
    message: "Introduce el DNI:",
    type: "input",
  },
];
module.exports = {
  preguntarDNI,
  preguntarOpcionesUsuario,
};
