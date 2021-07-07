const { Op } = require("sequelize");
const Duenyo = require("../schemas/Duenyo");

const getDuenyo = async (dni) => {
  const Duenyo = await Duenyo.findAll({
    where: {
      dni: {
        [Op.like]: dni,
      },
    },
  });
  return Duenyo;
};
const listarDniDuenyo = async (dni) => {
    const id = await Duenyo.findAll({
      where: {
        dni,
      },
      attributes: ["id"],
    });
    return id;
  };

module.exports = {
  getDuenyo,
  listarDniDuenyo
};
