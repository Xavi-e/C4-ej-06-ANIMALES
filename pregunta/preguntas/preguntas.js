const inquirer = require("inquirer");

const preguntarOpcionesUsuario = [
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
  // {
  //   name: "idAnimalAdoptar",
  //   message: "Escoge el animal el cuál desea adoptar",
  //   type: "list",
  //   choices: animalesPaAdoptar,
  //   when: (respuestasAnteriores) => respuestasAnteriores.opciones === "adopta",
  // },
];
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
