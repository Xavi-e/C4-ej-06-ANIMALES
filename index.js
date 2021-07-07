const chalk = require("chalk");
const { preguntar } = require("./pregunta/preguntador");
const {
  listarMisAnimales,
} = require("./db/operaciones/operacionListarMisAnimales");
const { preguntarDNI } = require("./pregunta/preguntas/preguntas");
const { getDuenyo } = require("./db/operaciones/operacionesDuenyo");

const preguntarDNIUsuario = async () => {
  const respuestas = await preguntar(preguntarDNI);
  return respuestas;
};
(async () => {
  const { dni } = await preguntarDNIUsuario();
  const duenyo = await getDuenyo(dni);
  if (!duenyo) {
    console.log(
      chalk.red.bold("El DNI introducido no se encuentra registrado!")
    );
    process.exit(0);
  }
  const idDuenyo = duenyo.toJSON().id;
})();
