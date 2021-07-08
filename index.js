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
const adoptarAnimal = require("./db/operaciones/operacionesAdoptarAnimal");

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
    case "adopta":
      console.log(respuestas);
      if (!respuestas.animalAdoptar) {
        console.log(
          chalk.yellow.bold(
            "Actualmente, no hay disponibles animales para adoptar."
          )
        );
        process.exit(0);
      }
      const animalAdoptado = await adoptarAnimal(
        respuestas.animalAdoptar,
        idDuenyo
      );
      console.log(
        animalAdoptado
          ? chalk.green.bold("Animal adoptado correctamente!")
          : chalk.red.bold("No se ha podido adoptar al animal!")
      );
      break;
    case "datoAnimal":
      const animal = await listarAnimalDuenyo(idDuenyo, respuestas.numeroChip);
      if (!animal) {
        console.log(
          chalk.yellow.bold(
            "No se ha encontrado ningún animal con ese número de chip."
          )
        );
        process.exit(0);
      }
      pintarAnimal(animal);
      break;
    case "todosMisAnimales":
      const animales = await listarMisAnimales(idDuenyo);
      pintarAnimales(animales);
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
        pintarAnimales(animalesEspecie);
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
