const manejarOpcionesDelUsuario = require("./cli/manejarOpcionesUsuario");
const {
  preguntarDNIUsuario,
  consultarDuenyo,
  darOpcionesAlUsuario,
} = require("./cli/operacionesUsuario");

(async () => {
  const { dni } = await preguntarDNIUsuario();
  const duenyo = await consultarDuenyo(dni);
  const idDuenyo = duenyo.id;
  const respuestas = await darOpcionesAlUsuario();
  manejarOpcionesDelUsuario(respuestas, idDuenyo);
})();
