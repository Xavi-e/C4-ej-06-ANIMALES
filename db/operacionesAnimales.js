const { Op } = require("sequelize");
const Animales = require("./schemas/Animal");
const Duenyo = require("./schemas/Duenyo");
const Especie = require("./schemas/Especie");
// const modificarAlumno = async () => {
//   try {
//     const alumnoModificado = await Alumno.update(
//       {
//         nota: 10,
//       },
//       {
//         where: {
//           nota: {
//             [Op.lt]: 5,
//           },
//         },
//       }
//     );
//     console.log(alumnoModificado);
//   } catch (err) {
//     console.log("No se ha podido modificar el alumno.");
//     console.log(err.message);
//   }
// };

const listarTodosMisAnimales = async (dni) => {
  const animales = await Duenyo.findOne({
    where: {
      dni,
    },
    include: [
      {
        model: Animales,
        required: true,
        include: [{ model: Especie, required: true }],
      },
    ],
  });
  return animales;
};

module.exports = {
  listarTodosMisAnimales,
};
