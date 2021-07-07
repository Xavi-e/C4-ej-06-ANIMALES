const morgan = require("morgan");
const app = require("./init");
const rutasAnimales = require("./rutas/animales");
const rutasUsuarios = require("./rutas/usuarios");
const { error404, errorGeneral } = require("./errores");

app.use(morgan("dev"));
app.use("/animales", rutasAnimales);
app.use("/usuarios", rutasUsuarios);
app.use(error404);
app.use(errorGeneral);