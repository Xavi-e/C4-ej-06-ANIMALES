require("dotenv").config();
const { Sequelize } = require("sequelize");

const usuarioFelipe = process.env.USERNAMEDB;
const passwordFelipe = process.env.PASSWORDDB;

const sequelize = new Sequelize({
  host: "localhost",
  username: usuarioFelipe,
  password: passwordFelipe,
  database: "animales",
  dialect: "mysql",
});
// sequelize.authenticate().then(() =>{
//     console.log("Estamos Dentro!");
// })
// .catch((err) => {
//     console.log("No nos podemos conectar a la base de datos");
//     console.log(err.message);

// });
module.exports = sequelize;
