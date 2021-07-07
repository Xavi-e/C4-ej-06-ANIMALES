const { preguntar } = require("./pregunta/preguntador");
const {
  listarAnimalesEspecie,
} = require("./db/operaciones/operacionesAnimalesPorEspecie");

const listar = async () => {
  const animales = await listarAnimalesEspecie(1);
};
listar();
