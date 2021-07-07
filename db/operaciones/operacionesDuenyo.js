const { Op } = require("sequelize");
const Duenyo = require("../schemas/Duenyo");

const getDuenyo = async (dni) => {
  const duenyo = await Duenyo.findOne({
    where: {
      dni,
    },
  });
  return duenyo;
};

module.exports = {
  getDuenyo,
};
