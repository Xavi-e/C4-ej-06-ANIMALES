const { preguntar } = require("./pregunta/preguntador");
const { listarTodosMisAnimales } = require("./db/operacionesAnimales");

const listar = async() => {
  const animales = await listarTodosMisAnimales("48872615L");
  console.log(animales);
};
listar();