const { Op } = require("sequelize");
const Duenyo = require("./schemas/Duenyo");

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

module.exports = {
  getDuenyo,
};
