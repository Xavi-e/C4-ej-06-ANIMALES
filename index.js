const chalk = require("chalk");
const {
  listarAnimalDuenyo,
} = require("./db/operaciones/operacionesDatoAnimal");
const { preguntar } = require("./pregunta/preguntador");
const {
  listarMisAnimales,
} = require("./db/operaciones/operacionListarMisAnimales");
const {
  preguntarDNI,
  preguntarOpcionesUsuario,
} = require("./pregunta/preguntas/preguntas");
const { getDuenyo } = require("./db/operaciones/operacionesDuenyo");
const {
  listarMisAnimalesPorEspecie,
} = require("./db/operaciones/operacionListarAnimalesEspecie");

const preguntarDNIUsuario = async () => {
  const respuestas = await preguntar(preguntarDNI);
  return respuestas;
};
const darOpcionesAlUsuario = async () => {
  const respuestas = await preguntar(preguntarOpcionesUsuario);
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

(async () => {
  const { dni } = await preguntarDNIUsuario();
  const duenyo = await consultarDuenyo(dni);
  const idDuenyo = duenyo.id;
  const respuestas = await darOpcionesAlUsuario();
  manejarOpcionesDelUsuario(respuestas, idDuenyo);
})();

const manejarOpcionesDelUsuario = async (respuestas, idDuenyo) => {
  const { opciones } = respuestas;
  switch (opciones) {
    case "datoAnimal":
      // eslint-disable-next-line no-case-declarations
      const animal = await listarAnimalDuenyo(idDuenyo, respuestas.numeroChip);
      console.log(
        `${animal.nombre} -> Edad: ${animal.edad} Especie: ${animal.Especie.nombre}`
      );
      break;
    case "todosMisAnimales":
      // eslint-disable-next-line no-case-declarations
      const animales = await listarMisAnimales(idDuenyo);
      pintarTodosMisAnimales(animales);
      break;
    case "animalesUnaEspecie":
      if (respuestas.nombreEspecie) {
        const animalesEspecie = await listarMisAnimalesPorEspecie(
          idDuenyo,
          respuestas.nombreEspecie
        );
        if (animalesEspecie.length === 0) {
          console.log(
            chalk.yellow.bold(
              "No se ha encontrado ningún animal de la especie que busca."
            )
          );
          process.exit(0);
        }
        pintarTodosMisAnimales(animalesEspecie);
      } else {
        console.log(
          chalk.red.bold("No se ha introducido correctamente la especie!!!")
        );
        process.exit(1);
      }
      break;
    default:
      console.log(chalk.red.bold("¡¡¡¡¡Por aquí no debe pasar nunca!!!!!"));
  }
};
const pintarTodosMisAnimales = (animales) => {
  console.log("\nAnimales por nombre y especie:");
  for (const animal of animales) {
    console.log(
      `${animal.nombre} -> Edad: ${animal.edad} Especie: ${animal.Especie.nombre}`
    );
  }
};
