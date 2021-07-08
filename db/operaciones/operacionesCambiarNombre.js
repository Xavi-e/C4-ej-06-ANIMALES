const Duenyo = require("../schemas/Duenyo");

const cambiarNombre = async (nombreNuevo, idDuenyo) => {
  const nombreCambiado = await Duenyo.update(
    {
      nombre: nombreNuevo,
    },
    {
      where: {
        id: idDuenyo,
      },
    }
  );
  return nombreCambiado[0] === 1;
};
module.exports = cambiarNombre;
