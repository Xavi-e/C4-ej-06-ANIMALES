const chalk = require("chalk");
const {
  listarMisAnimalesPorEspecie,
} = require("../db/operaciones/operacionListarAnimalesEspecie");
const adoptarAnimal = require("../db/operaciones/operacionesAdoptarAnimal");
const cambiarNombre = require("../db/operaciones/operacionesCambiarNombre");
const {
  listarAnimalDuenyo,
} = require("../db/operaciones/operacionesDatoAnimal");
const {
  listarMisAnimales,
} = require("../db/operaciones/operacionListarMisAnimales");
const {
  validarNombre,
  pintarAnimal,
  pintarAnimales,
} = require("./pintarResultadosUsuario");

const manejarOpcionesDelUsuario = async (respuestas, idDuenyo) => {
  const { opciones } = respuestas;
  switch (opciones) {
    case "cambiarNombre":
      const { valido, mensaje } = validarNombre(respuestas.nuevoNombre);
      if (!valido) {
        console.log(chalk.red.bold(mensaje));
        process.exit(1);
      }
      const nombreCambiado = await cambiarNombre(
        respuestas.nuevoNombre,
        idDuenyo
      );
      console.log(
        nombreCambiado
          ? chalk.green.bold("Nombre cambiado correctamente!")
          : chalk.red.bold("No se ha podido cambiar el nombre!")
      );
      break;
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
module.exports = manejarOpcionesDelUsuario;
