const chalk = require("chalk");
const { preguntar } = require("../pregunta/preguntador");
const {
  preguntarDNI,
  preguntarOpcionesUsuario,
} = require("../pregunta/preguntas/preguntas");
const { getDuenyo } = require("../db/operaciones/operacionesDuenyo");

const preguntarDNIUsuario = async () => {
  const respuestas = await preguntar(preguntarDNI);
  return respuestas;
};
const darOpcionesAlUsuario = async () => {
  const respuestas = await preguntar(await preguntarOpcionesUsuario());
  return respuestas;
};
const consultarDuenyo = async (dni) => {
  const duenyo = await getDuenyo(dni);
  if (!duenyo) {
    console.log(
      chalk.red.bold("El DNI introducido no se encuentra registrado!")
    );
    process.exit(0);
  }
  return duenyo;
};
module.exports = {
  preguntarDNIUsuario,
  darOpcionesAlUsuario,
  consultarDuenyo,
};
